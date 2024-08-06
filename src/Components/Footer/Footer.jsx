import React from 'react';
import insta from '../images/instagram_icon.png';
import pint from '../images/pintester_icon.png';
import logo from '../images/shop.png';
import whatsapp from '../images/whatsapp_icon.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="logo">
                <img src= {logo} alt="" />
                <h2>shopper</h2>
            </div>
            <div className="links">
                <a href="#"> company </a>
                <a href="#"> products </a>
                <a href="#"> offers </a>
                <a href="#"> offers </a>
                <a href="#"> contact </a>
            </div>
            <div className="icons">
                <img src= {insta} alt="" />
                <img src= {pint} alt="" />
                <img src= {whatsapp} alt="" />
            </div>
            <div className="copyRights">
                <p>copyright @2024-All right reserved.</p>
            </div>
        </div>
    )
}

export default Footer