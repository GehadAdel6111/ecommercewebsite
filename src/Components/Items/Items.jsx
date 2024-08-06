import React from 'react'
import { Link } from 'react-router-dom'
import './Items.css'

export const Items =  ({ id, name, image, new_price, old_price })  => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src = {image} alt=''/>
        <p>{name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                ${new_price}
            </div>
            <div className="item-price-old">
            ${old_price}
            </div>
        </div>
      </Link>
    </div>
  )
}
