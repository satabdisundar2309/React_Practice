import React from 'react'
import { discover } from "../../../dummyData"
import Heading from "../../Common/Heading/Heading"
function Discover() {
  return (
    <>
         <section className='discover'>
        <div className='container'>
          <Heading title='Discover' />
          <div className='content'>
            {discover.map((val,i) => {
              return (
                <div key={i} className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <h1 className='title'>{val.title}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover