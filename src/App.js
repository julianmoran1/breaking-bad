import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Quote from "./Quote";

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: "Arial";
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  const [quote, setQuote] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await api.json();
    console.log(quote[0]);
    setQuote(quote[0]);
  };

  useEffect(() => {
    consultarAPI()
  }, [])

  return (
    <Container>

      <Quote quote={quote} />

      <Button onClick={consultarAPI}>Obtener frase</Button>
    </Container>
  );
}

export default App;
