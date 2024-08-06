import React from 'react'
import ProductList from '../ProductList'


const Men = () => {
    return (
        <div className='MenProducts products'>
                <h2>Men Products</h2>
                <hr />
                <ProductList category="men" />
        </div>
    )
}

export default Men