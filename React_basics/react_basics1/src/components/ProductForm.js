import "./ProductForm.css";
import React, { useState } from "react";

function ProductForm(props) {
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");
  function titleChangeHandler(event) {
    // console.log("title change karoge?")
    // console.log(event.target.value)
    setTitle(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }
  function submitHandler(event){
    event.preventDefault();
    const productData={
        title: newTitle,
        date: newDate
    }
    console.log("inside projectform")
    console.log(productData)
    props.printProduct2(productData);
    setDate('')
    setTitle('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-product__control">
        <label>Title</label>
        <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
      </div>
      <div className="new-product__control">
        <label>Date</label>
        <input
          type="date"
          value={newDate}
          onChange={dateChangeHandler}
          min="2023-01-01"
          max="2023-12-12"
        ></input>
      </div>
      <button type="submit" className="new-product_button">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
