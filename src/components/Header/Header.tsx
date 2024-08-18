import React from 'react'
import './Header.css'

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
          <li><a href="">Home</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
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