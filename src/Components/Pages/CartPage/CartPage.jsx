import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './CartPage.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const groupedProducts = cart.reduce((acc, product) => {
        if (!acc[product.id]) {
            acc[product.id] = {
                ...product,
                quantity: 1
            };
        } else {
            acc[product.id].quantity += 1;
        }
        return acc;
    }, {});

    const groupedProductsArray = Object.values(groupedProducts);

    return (
        <div className="cart">
            {groupedProductsArray.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cartItems">
                    <div className="titles">
                        <ul>
                            <li>product</li>
                            <li>quantity</li>
                            <li>price</li>
                            <li>remove</li>
                        </ul>
                    </div>
                    {groupedProductsArray.map(product => (
                        <div key={product.id} className="cartItem">
                            <img src={product.image} alt={product.name} />
                            <p>{product.quantity}</p>
                            <p>${(product.new_price * product.quantity).toFixed(2)}</p>
                            <button onClick={() => removeFromCart(product.id)} className='button'><span className='button-content'>Remove</span></button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
