import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-bar d-f jc-sb align-center">
        <div><img src="/images/footer-logo.svg" alt="footer-logo" /></div>
        <div>
          <h5 className="footer-bl-title">Contact</h5>
          <p className="footer-bl-text">
            +1+86 852 346 000 <br />
            info@foodzero.com
          </p>
          <p className="footer-bl-text text-last">
            1959 Sepulveda Blvd. <br />
            Culver City, CA, 90230
          </p>
        </div>
        <div>
          <h5 className="footer-bl-title">Never Miss a Recipe</h5>
          <form action="" className="footer-bl-fm d-f align-center">
            <input type="email" name="clientEmail" placeholder='Email Address' />
            <button type="button">Subscribe</button>
          </form>
          <p className="footer-bl-note">Join our subscribers and get best recipe delivered each week!</p>
        </div>
      </div>
      <div className="footer-info d-f jc-sb align-center">
        <div className="footer-copyright">&copy; 2020 Zero Inc. All rights Reserved</div>
        <div className="footer-social d-f">
          <div><img src="/images/footer-social1.png" alt="footer-social1" /></div>
          <div><img src="/images/footer-social2.png" alt="footer-social2" /></div>
          <div><img src="/images/footer-social3.png" alt="footer-social3" /></div>
          <div><img src="/images/footer-social4.png" alt="footer-social4" /></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer