import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';

const SignUP = () => {
    return (
        <div className="signUp">
                <form action="signUp">
                    <div className="userName input" style={{ position: 'relative' }}>
                        <input type="text" id="username" required />
                        <label htmlFor="userName">UserName</label>
                    </div>
                    <div className="email input" style={{ position: 'relative' }}>
                        <input type="email" id="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="password input" style={{ position: 'relative' }}>
                        <input type="password" id="password" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="message">
                        <p>if you have an account , <Link to= '/login'>Login</Link></p>
                    </div>
                    <Link to= '/' className='link'>
                        <button className='button'>
                            <span className='button-content'>SignUp</span>
                        </button>
                    </Link>
                </form>
        </div>
    )
}

export default SignUP