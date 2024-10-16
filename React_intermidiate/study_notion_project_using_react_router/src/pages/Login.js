import React from 'react'
import Template from '../components/Template'
import Image from '../assets/login.png'
function Login({setIsLoggedIn}) {
  return (
    <Template
        title="Welcome Back"
        desc1="Buildd your skills toiday and today"
        desc2="Buildd your skills toiday and today"
        image={Image}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login