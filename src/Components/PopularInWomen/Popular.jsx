import React from 'react';
import data from '../data';
import image from '../images/product_5-removebg-preview.png';
import { Items } from '../Items/Items';
import './Popular.css';

const Popular = () => {
    return (
        <div className="popular">
            <h2>Popular in Women</h2>
            <hr/>
            <div className="collection">
            {data.map((item,i) => {
                return (
                    <Items key={i} id={item.id}
                    name={item.name} image={item.image}
                    new_price={item.new_price} old_price={item.old_price}/>
                )
            })}
            </div>
            <div className="exclusive">
                <div className="leftSide">
                    <h2>Exclusive</h2>
                    <h2>Offers for You</h2>
                    <p>Only on best sellers products</p>
                    <button className='button'>
                        <span className='button-content'>Check Now</span>
                    </button>
                </div>
                <div className="rightSide">
                    <img src={image} alt="Exclusive Offer" />
                </div>
            </div>
        </div>
    );
};

export default Popular;