import React from 'react'
import { tpost } from "../../../../dummyData"
import Heading from "../../../Common/Heading/Heading"

function TPost() {
  return (
    <>
          <section className='tpost'>
        <Heading title='Tiktok post' />
        {tpost.map((val,i) => {
          return (
            <div key={i} className='box flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 20)}...</h1>
                <span>a year ago</span>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default TPost