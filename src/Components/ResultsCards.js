import React, { useEffect } from "react";

const ResultsCards = (props) => {
  return (
    <div>
      <img src={props.thumbnailImageUrl}></img>
      <p>{props.name}</p>

      {props.msrp > props.price ? (
        <div>
          <p className="msrp">${props.msrp}</p>
          <p>${props.price}</p>
        </div>
      ) : (
        <div>
          <p>${props.price}</p>
        </div>
      )}
    </div>
  );
};

export default ResultsCards;
