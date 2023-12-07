import React from 'react'
import './Nav.css'

const Nav = () => {
  const styleObj ={
     color: 'red',
  }
  return (
    <div className="header">
      <div className="heading">
        <h2>ONEPIRATE</h2>
      </div>
      <div className="nav">
        <a to="/" >SIGN IN</a>
        <a to="/" style={styleObj}>SIGN UP</a>
      </div>
    </div>
  )
}

export default Nav