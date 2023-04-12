import React from 'react'
import imgone from '../images/imgone.png'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home'>
            {/* <img src={imgone} /> */}
            <div className='home-sec-one'>
                <div className='home_one'>

                    <h2>DESSERT | BAR | KITCHEN</h2>
                    <p>The barn is a global food experience and our dessert bar is legendry</p>
                    <button>Contact Us</button>

                </div>
            </div>
            <div className='home_sec_two'>
                <div className='home_two'>
                    <p>Experience culinary excellence at our restaurant. Book your table today and get ready to indulge in a delightful dining experience!!</p>
                </div>
            </div>
        </div>
    )
}

export default Home