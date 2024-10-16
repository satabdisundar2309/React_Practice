import React from 'react'
import { useNavigate } from 'react-router-dom'
const Labs = () => {
    let navigate = useNavigate();
    function clickHandler(){
        // move to about page
        navigate("/about")
    }
  return (
    <div><div>This is labs page
    </div>
    <button onClick={clickHandler}>Move to about page</button>
    </div>
  )
}

export default Labs