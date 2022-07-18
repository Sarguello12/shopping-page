import React from "react";

// takes in product information passed down from the parent component via props
// object properties are then accessed and displayed to the page
const ResultsCards = (props) => {
  return (
    <div className="result-card">
      <img src={props.thumbnailImageUrl}></img>
      <div className="result-card__info">
        <p>{props.name}</p>
        <div className="result-card__price">
          {/* if product msrp is more than product price msrp will be displayed with a line through it (styling in scss file) */}
          {props.msrp > props.price ? (
            <div>
              <p className="msrp">${props.msrp}</p>
              <p className="price">${props.price}</p>
            </div>
          ) : (
            <div>
              <p className="price">${props.price}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsCards;
