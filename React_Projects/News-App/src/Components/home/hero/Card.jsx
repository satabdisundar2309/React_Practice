import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Card({ items: { id, cover, category, title, authorName, time } }) {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={cover}></img>
        </div>
        <div className="text">
          <span className="category">{category}</span>
          <Link to={`/SinglePage/${id}`}>
          <h1 className="titleBg">{title}</h1></Link>

          <div className="author flex">
            <span className="">By {authorName}</span>
            <span className="">{time}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
