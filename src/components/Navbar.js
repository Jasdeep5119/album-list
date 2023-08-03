import React from 'react';
import { Link } from 'react-router-dom'

//Get button name and path for evaery component
const Navbar = (props) => {

  return (
    <div className='navbar'>
      <h2>
        <span className='first-half'>ALBUMS</span>
        <span className='last-half'>LIST</span>
      </h2>
      <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

export default Navbar