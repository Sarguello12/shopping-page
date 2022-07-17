import React from "react";

const ResultsCards = (props) => {
  return (
    <div>
      <img src={props.imageUrl}></img>
      <p>{props.name}</p>
      <p>${props.price}</p>
    </div>
  );
};

export default ResultsCards;
