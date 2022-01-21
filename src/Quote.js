import React from "react";

export default function Quote({quote}) {

    //const {phrase, author} = quote;
  return (
    <div>
      <h2>{quote.quote}</h2>
      <h2>{quote.author}</h2>
      
    </div>
  );
}
