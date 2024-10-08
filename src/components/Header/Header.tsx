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
        <ul className={drop ? "dropdown-menu" : "op-0"} >
          <li onClick={()=>setDrop(false)}><Link to="/">Home</Link></li>
          <li onClick={()=>setDrop(false)}><Link to="/menu">Menu</Link></li>
          <li onClick={()=>setDrop(false)}><Link to="/about">About</Link></li>
          <li onClick={()=>setDrop(false)}><Link to="/portfolio">Portfolio</Link></li>
          <li onClick={()=>setDrop(false)}><Link to="/blog">Blog</Link></li>
          <li onClick={()=>setDrop(false)}><Link to="/contact">Contact</Link></li>
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