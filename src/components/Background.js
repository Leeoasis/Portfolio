import React from 'react'
import IntroImg from "../assets/water-waves.mp4"
import '../styles/Background.css';

const Background = () => {
  return (
    <div className="mask">

    <video className="intro-img" autoPlay loop muted>
      <source src={IntroImg} type="video/mp4" />

      Your browser does not support the video tag.
    </video>

    </div>
  )
}

export default Background