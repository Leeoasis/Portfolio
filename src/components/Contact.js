import React from 'react'
import Background from './Background'
import SideCard from './SideCard'
import Intro from './Navbar'

const Contact = () => {
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

export default Contact