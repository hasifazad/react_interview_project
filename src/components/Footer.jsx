import React from 'react'
import logo from '../images/logo.png'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_one'>
                <img src={logo} />
            </div>
            <div className='footer_two'>
                <h3>Dessert.Bar.Kitchen</h3>
                <p>+040 235 468</p>
                <p>savory@qodeinteractive.com</p>
                <p>Plot No.8-2, 293/82/A/161, Rd Number 13,</p>
                <p> Jubilee Hills, Hyderabad, Telangana 500033</p>
                <div>

                </div>
            </div>
            <div className='footer_three'>
                <h2>© TECHARION 2023</h2>
            </div>
        </div>
    )
}

export default Footer