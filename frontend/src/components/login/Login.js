import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'
import LogoImage from '../../images/logo2.ico'

export default function LoginPage() {
    return (
        <center>
            <div class = "Login">
            <div className="text-center m-5-auto">
            <form action="/home">
            <h2>Login</h2>
            <div class = "text_fields">
                <input type="text" name="first_name" required />
                <span></span>
                <label>Username</label>
            </div>
            <div class = "text_fields">
                <input type="password" name="password" required />
                <span></span>
                <label>Password</label>
            </div>
            <div class = "logo1">
                <img src={LogoImage} alt = ""/>
            </div>

            <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>  
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                <p>No Account Yet? <Link to="/register">Create an account</Link>.</p>
            </form>
            <footer>
                <p><Link to="/">Back to Welcome Page</Link>.</p>
            </footer>
        </div>
        </div>
        </center>
    );
}