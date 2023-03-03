import './Navbar.css';
import {Link} from 'react-router-dom';
import { MenuItems } from './MenuItems';
import React, {useState} from 'react'

const Navbar = () => {
  const [icon, setIcon] = useState(false)
  const handleClick = () => {
    setIcon( icon => !icon)
  }
  

  return (
    <div>
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Travelers</h1>
        <div className='menu-icons' onClick={handleClick}>
          <i className={icon ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={icon ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item,index) =>{
            return(  
                    <li  key={index}><Link className={item.cName}  to={item.url} ><i className={item.icon} ></i>{item.title}</Link></li>
          )})}
          <button>Sign Up</button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
