import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [drop, setDrop] = React.useState(false)
  const handleDrop = () => {
    setDrop((prevState) => {
      return (
        !prevState
      )
    })
  }

  return (
    <header className='header d-f jc-sb align-center'>
      <div className='d-f'>
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <button className='btn-clear d-b header-drop-btn' onClick={handleDrop}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </button>
        <ul className={drop ? "dropdown-menu" : "d-n"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="">Blog</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="d-f align-center">
        <div className="header-phone">+86 852 346 000</div>
        <a href='' className="header-link">Reservations</a>
      </div>
    </header>
  )
}

export default Header