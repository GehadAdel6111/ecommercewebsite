import React from 'react';
import ProductList from '../ProductList';

const Kids = () => {
    return (
        <div className='KidsProducts products'>
            <h2>Kids Products</h2>
            <hr />
            <ProductList category="kid" />
        </div>
    );
};

export default Kids;
