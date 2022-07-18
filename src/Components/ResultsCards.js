import React from "react";

// takes in product information passed down from the parent component via props
// object properties are then accessed and displayed to the page
const ResultsCards = (props) => {
  return (
    <div>
      <img src={props.thumbnailImageUrl}></img>
      <p>{props.name}</p>
      {/* if product msrp is more than product price msrp will be displayed with a line through it (styling in scss file) */}
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
