import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='footer-logo-left-img' src={footer_logo} alt="" />
                <p>A 4th year student of Computer Science. Certified AWS Cloud Practioner and Solutions Architect- Associate.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>

            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Ashish Gupta. All rights reserved</p>
            <div className='footer-bottom-right'>
                <p>Terms of Service</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>

        </div>
    </div>
  )
}

export default Footer