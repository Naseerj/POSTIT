import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../Images/Postit 1.svg'

const Navbar = () => {
  return (
    <div>
      <div className='parentdiv'>
      <div>
      <img src={logo} alt="" />
      </div>
      <div className='dummydiv'></div>
      {/* <div></div> */}
      <div className='linkdiv'>
        <a href="/">Stories</a>
        <a href="/">Contact</a>
        <a href="/">Sign in</a>
       <Link to='/signup'> <button className='firstbtn'>Get Started</button></Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar