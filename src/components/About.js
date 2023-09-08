import React from 'react'
import Background from './Background'
import SideCard from './SideCard'
import Intro from './Navbar'

const About = () => {
  return (
    <div>
        <Background />
        <div className="content">
            <SideCard />
            <Intro />
        </div>
    </div>
  )
}

export default About