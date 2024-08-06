import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <form action="login">
                <div className="userName input" style={{ position: 'relative' }}>
                    <input type="text" id="username" required />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="password input" style={{ position: 'relative' }}>
                    <input type="password" id="password" required />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="message">
                    <p>If you don't have an account, <Link to='/signup'>Sign Up</Link></p>
                </div>
                <Link to='/' className='link'>
                    <button className='button'>
                        <span className='button-content'>Login</span>
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default Login;
