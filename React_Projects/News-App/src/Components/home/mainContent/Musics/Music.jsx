import React from 'react'
import Slider from "react-slick"
import Heading from "../../../Common/Heading/Heading"
import { popular } from "../../../../dummyData"

function Music() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
      }
  return (
    <>
         <section className='music'>
        <Heading title='Music News' />
        <div className='content'>
          <Slider {...settings}>
            {popular
              .filter((val) => val.category === "fun")
              .map((val,i) => {
                return (
                  <div key={i} className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div className='category category1'>
                          <span>{val.category}</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val.title.slice(0, 17)}...</h1>
                        <div className='date'>
                          <i className='fas fa-calendar-days'></i>
                          <label>{val.date}</label>
                        </div>
                        <p className='desc'>{val.desc.slice(0, 150)}...</p>
                        <div className='comment'>
                          <i className='fas fa-share'></i>
                          <label>Share / </label>
                          <i className='fas fa-comments'></i>
                          <label>{val.comments}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Music