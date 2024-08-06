import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cart from '../images/cart_icon.png';
import menuimg from '../images/hamburger.png';
import logo from '../images/shop.png';
import { CartContext } from '../Pages/CartContext/CartContext';
import './Navbar.css';

export const Navbar = () => {
    const { cart: cartItems } = useContext(CartContext);
    const [menu, setMenu] = useState('shop');
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpened(prevState => !prevState);
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <div className='navbar'>
            <Link to='/'>
                <div className="navLogo" onClick={() => setMenu('shop')}>
                    <img src={logo} alt='logo'  loading='lazy'/>
                    <h2>SHOPPER</h2>
                </div>
            </Link>
            <ul className={`navMenu ${isMenuOpened ? 'open' : 'closed'}`}>
                <li onClick={() => setMenu('shop')}><Link to='/'>Shop</Link>{menu === 'shop'}</li>
                <li onClick={() => setMenu('men')}><Link to='/men'>Men</Link>{menu === 'men'}</li>
                <li onClick={() => setMenu('women')}><Link to='/women'>Women</Link>{menu === 'women'}</li>
                <li onClick={() => setMenu('kids')}><Link to='/kids'>Kids</Link>{menu === 'kids'}</li>
            </ul>
            <div className='navLoginCart'>
                <Link to='/login'>
                    <button className='button' onClick={() => setMenu('login')}>
                        <span className='button-content'>Login</span>
                    </button>
                </Link>
                <div className="product" onClick={handleCartClick}>
                    <img src={cart} alt='cart'  loading='lazy'/>
                    <div className="productNum">{cartItems.length}</div>
                </div>
                <div className="menu" onClick={toggleMenu}>
                    <img src={menuimg} alt="menu"  loading='lazy'/>
                </div>
            </div>
        </div>
    );
};
