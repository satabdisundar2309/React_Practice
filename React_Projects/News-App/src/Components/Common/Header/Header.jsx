import React, { useState } from "react";
import Head from "./Head";
import { Link } from "react-router-dom"
function Header() {
     const [navBar, setnavBar] = useState(false)

  return (

    <div>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul className={navBar? 'navbar' : 'flex'} onClick={()=>{setnavBar(false)}}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/culture">Culture</Link>
              </li>
              <li>
                <Link to="#">Politics</Link>
              </li>
              <li>
                <Link to="#">Memes</Link>
              </li>
              <li>
                <Link to="#">Sports</Link>
              </li>
              <li>
                <Link to="#">Boxed</Link>
              </li>
              <li>
                <Link to="#">Reviews</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setnavBar(!navBar)}>
            {navBar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
