import React from 'react'

function SocialMedia() {
  return (
    <>
         <section className='social'>
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
          <span>75,132 Likes</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-pinterest'></i>
          <span>1,352 Fans</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <span>2,309 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <span>20,019 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-youtube'></i>
          <span>1,800 Subscriber</span>
        </div>
      </section>
    </>
  )
}

export default SocialMedia