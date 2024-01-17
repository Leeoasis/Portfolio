import React from 'react'
import SideCard from './SideCard'
import Navbar from './Navbar'

const Shared = () => {
  return (
    <div>
        <div className="content">
            <SideCard />
            <Navbar />
        </div>
    </div>
  )
}

export default Shared