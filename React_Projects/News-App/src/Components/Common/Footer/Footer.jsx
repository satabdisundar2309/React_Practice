import React from 'react'

function Footer() {
  return (
    <>
         <footer>
        <div className='container'>
          <div className='box logo'>
            <img className='footerLogo' src='../images/logoNBorder2.png' alt='' />
            <p>Thanks for visiting this website</p>
            <i className='fa fa-envelope'></i>
            <span> satabdibehera2309@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 8658262028</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Contact me to hire me...</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Pata nhi India kab ICC trophy jeetegi...</p>
            </div>
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>Pata nhi India kab ICC trophy jeetegi...</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Pata nhi India kab ICC trophy jeetegi...</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(7)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(5)</label>
              </li>
              <li>
                <span>Health</span> <label>(6)</label>
              </li>
              <li>
                <span>Nature</span> <label>(1)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className='legal  '>
        <div className='container legalX'>
          <p>© Satabdisundar Behera <i className='fa fa-smile'></i></p>
        </div>
      </div>
    </>
  )
}

export default Footer