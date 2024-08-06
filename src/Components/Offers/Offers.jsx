import React from 'react'
import homeImage from '../images/product_10-removebg-preview.png'
import './Offers.css'

const Offers = () => {
    return (
        <div>
            <div className="offers">
                <div className="leftSide">
                    <p>new arrivals only</p>
                    <h2>new</h2>
                    <h2>collections</h2>
                    <h2>for everyone</h2>
                    <div className="button">
                        <span className='button-content'>Latest collection</span>
                    </div>
                </div>
                <div className="rightSide">
                    <img src= {homeImage} alt="image" loading='lazy'/>
                </div>
            </div>
        </div>
    )
}

export default Offers