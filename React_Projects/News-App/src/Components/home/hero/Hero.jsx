import React, { useState } from 'react'
import {hero} from "../../../dummyData"

import Card from './Card'
function Hero() {

    const [items, setItems]=useState(hero)
  return (
    <div>
        <section className='hero'>
            <div className='container'>
                {items.map((item, index)=>{
                    return <Card key={index} items={item}/>
                })}
            </div>
        </section>
    </div>
  )
}

export default Hero