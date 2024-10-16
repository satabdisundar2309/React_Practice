import React from 'react'
import Template from '../components/Template'
import Image from '../assets/signup.png'
function SignUp({setIsLoggedIn}) {
  return (
    <Template
    title="Join millions in learning"
    desc1="Buildd your skills toiday and today"
    desc2="Buildd your skills toiday and today"
    image={Image}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
/>
  )
}

export default SignUp