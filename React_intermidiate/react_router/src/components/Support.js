import React from 'react'
import { useNavigate } from 'react-router-dom';
const Support = () => {
    let navigate = useNavigate();
    function clickHandler(){
        // move to about page
        navigate(-1)
    }
  return (
    <div><div>This is support page
    </div>
    <button onClick={clickHandler}>go back</button>
    </div>
  )
}

export default Support