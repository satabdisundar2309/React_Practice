import React, { useState } from "react";

import ProductDate from "./ProductDate";
import Card from "./Card";
import "./ProductItem.css";

const ProductItem = (props) => {
  // let title= props.title
  // now lets use the useState hook
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Popcorn")
    // title="Popcorn" //this wont be updated in the UI, for updation we use useState concept
    console.log("button clicked");
  }

  return (
    <Card className="product-item">
      <ProductDate date={props.date} />
      <div className="product-item__description">
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to cart</button>
    </Card>
    /* in react it is mandatory to write "on" before creating an attribute fromevent listener
      and the function we will pass in it should have Handler in it. */
  );
};

export default ProductItem;
