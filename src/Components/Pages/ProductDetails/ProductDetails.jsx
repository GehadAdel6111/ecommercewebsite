import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../../all_product';
import star2 from '../../images/star_dull_icon.png';
import star1 from '../../images/star_icon.png';
import { CartContext } from '../CartContext/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = all_product.find(item => item.id === parseInt(id));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="productDetails">
            <div className="top">
                <img src={product.image} alt={product.name} className='main'/>
                <div className="small">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="name">
                <h2>{product.name}</h2>
            </div>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ${product.new_price}
                </div>
                <div className="item-price-old">
                    ${product.old_price}
                </div>
            </div>
            <div className="stars">
                <img src= {star1} alt="" />
                <img src= {star1} alt="" />
                <img src= {star1} alt="" />
                <img src= {star1} alt="" />
                <img src= {star2} alt="" />
            </div>
            <div className="category">
                <h4>Category: <span>{product.category}</span></h4>
            </div>
            <button className='button' onClick={() => addToCart(product)}>
                <span className='button-content'>Add to Cart</span>
            </button>
        </div>
    );
};

export default ProductDetails;
