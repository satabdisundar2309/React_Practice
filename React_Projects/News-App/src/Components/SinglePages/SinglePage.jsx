import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hero } from "../../dummyData"
import Side from "../home/sideContent/side/Side";
import SinglePageSlider from "./SinglePageSlider/SinglePageSlider";

function SinglePage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const val = hero.find((item) => {
      return item.id === parseInt(id);
    });
    window.scrollTo(0, 0);
    if (val) {
      setItem(val);
    }
  }, [id]);
  return (
    <>
       {item ? (
        <main>
          <SinglePageSlider />
          <div className='container'>
            <section className='mainContent details'>
              <h1 className='title'>{item.title}</h1>

              <div className='author'>
                <span>by</span>
                <img src='https://avatars.githubusercontent.com/u/139369285?v=4' alt='' />
                <p> {item.authorName} on</p>
                <label>{item.time}</label>
              </div>

              <div className='social'>
                <div className='socBox'>
                  <i className='fab fa-facebook-f'></i>
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-twitter'></i>
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-pinterest'></i>
                </div>
                <div className='socBox'>
                  <i className='fa fa-envelope'></i>
                </div>
              </div>

              <div className='desctop'>
                {item.desc.map((val, i) => {
                  return (
                    <div key={i}>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                    </div>
                  )
                })}
              </div>
              <img className="coverSingle" src={item.cover} alt='' />
              {item.desc.map((val, i) => (
                <p key={i}>{val.para3}</p>
              ))}

              <div className='descbot'>
                {item.details.map((data, i) => {
                  return (
                    <div key={i}>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </div>
                  )
                })}
              </div>

              <div className='quote'>
                <i className='fa fa-quote-left'></i>
                {item.details.map((data, i) => (
                  <p key={i}>{data.quote}</p>
                ))}
              </div>

              <div className='desctop'>
                {item.details.map((data,i) => {
                  return (
                    <div key={i}>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </div>
                  )
                })}
              </div>
            </section>
            <section className='sideContent'>
              <Side />
            </section>
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
    </>
  );
}

export default SinglePage;
