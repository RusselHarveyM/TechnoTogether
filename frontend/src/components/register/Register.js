import React from 'react'
import { Link } from 'react-router-dom'

import './Register.css'
import LogoImage from '../../images/logo2.ico'

export default function Register() {
    return (
        <center>
            <div class = "Register">
            <div className="text-center m-5-auto">
            <form action="/home">
            <h2>Personal Information</h2>
            <h5>Nulla vulputate ornare metus, eget faucibus enim feugiat ut.</h5>
                <div class = "textfields">
                    <input type="text" name="username" required />
                    <span></span>
                    <label>Username</label><br/>

                </div>
                <div class = "textfields">
                    <input type="email" name="email" required />
                    <span></span>
                    <label>Email</label><br/>
                </div>
                <div class = "textfields">
                    <input type="password" name="password" required />
                    <span></span>
                    <label>Password</label><br/>
                </div>
                <div class = "logo1">
                <img src={LogoImage} alt = ""/>
            </div>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://www.youtube.com/watch?v=BBJa32lCaaY&ab_channel=LegacyPNDA" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Welcome Page</Link>.</p>
            </footer>
        </div>
        </div>
        </center>
    );
}