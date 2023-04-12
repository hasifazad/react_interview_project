import React from 'react'
import '../styles/Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header_one'>
                <p>LOGIN</p>
                <p>RESERVATION</p>
                <p>PRIVATE PARTIES</p>
            </div>
            <div className='header_two'>
                <p>EVENTS</p>
                <p>CONTACT US</p>
                <p>ABOUT US</p>
            </div>
        </div>
    )
}

export default Header