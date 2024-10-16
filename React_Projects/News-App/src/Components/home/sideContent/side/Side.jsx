import React from "react";
import Heading from "../../../Common/Heading/Heading";
import SocialMedia from "../social/SocialMedia";
import TPost from "../TPost/TPost";
import { gallery } from "../../../../dummyData"
import Slider from "react-slick"

function Side() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const categories = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
  return (
    <>
      <Heading title="Get In Touch" />
      <SocialMedia />
      <Heading title="Subscribe" />

      <section className="subscribe">
        <h1 className="title">Subscribe for more NEWS...</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section>

      <section className='banner'>
        <img className="sidebar-banner-new2" src='./images/sidebar-banner-new2.jpg' alt='' />
      </section>
      <TPost/>

      <section className='catgorys'>
        <Heading title='Categories' />
        {categories.map((category,i) => {
          return (
            <div key={i} className='category category1'>
              <span>{category}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
          {gallery.map((val,i) => {
            return (
              <div key={i} className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  );
}

export default Side;
