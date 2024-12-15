import React from 'react'
import Axios from './components/Axios'
import Fetch from './components/Fetch'
import ReactQuery from './components/ReactQuery'

const Navbar = () => {
  return (
   <div className="nav">
   <div className="navAlign">
   
    <Axios/>
    <Fetch/>
    <ReactQuery/>
   </div>
       </div>
  )
}

export default Navbar