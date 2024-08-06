import React from 'react';
import ProductList from '../ProductList';
import './Women.css';

const WomenProducts = () => {
    return (
        <div className='WomenProducts products'>
            <h2>Women Products</h2>
            <hr />
            <ProductList category="women" />
        </div>
    );
};

export default WomenProducts;
