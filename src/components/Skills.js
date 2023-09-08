import React from 'react'
import Background from './Background'
import SideCard from './SideCard'
import Intro from './Navbar'

const Skills = () => {
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

export default Skills