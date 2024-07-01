import React from 'react'
import './Footer1.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=""width="100" height="50"/>
            <p>ARTISTRY</p>
        </div>
        <ul className="footer-links">
            <li>ARTWORKS</li>
            <li>SCULPTURES</li>
            <li>EQUIPMENTS</li>
            
        </ul>
        <div className="footer-social-icon">
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt=""/>
                <img src={whatsapp_icon} alt=""/>
                <img src={pintester_icon} alt=""/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright@2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer