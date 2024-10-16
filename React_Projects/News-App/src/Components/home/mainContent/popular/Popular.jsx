import React from "react";
import Heading from "../../../Common/Heading/Heading";
import { popular } from "../../../../dummyData";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Popular() {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 2,
        speed: 500,
        rows: 4,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 4,
            },
          },
        ],
      }
  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <Slider {...settings}>
        {popular.map((val, i) => {
          return (
            <div key={i} className="items">
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img src={val.cover} />
                  </div>
                  <div className="category category1">
                    <span>{val.category}</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">{val.title.slice(0, 20)}...</h1>
                  <div className="date">
                    <i className="fas fa-calendar-days"></i>
                    <label>{val.date}</label>
                  </div>
                  <div className="comment">
                    <i className="fas fa-comments"></i>
                    <label>{val.comments}</label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </Slider>
      </section>
    </>
  );
}

export default Popular;
