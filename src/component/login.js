import React from "react";
import { Link } from "react-router-dom";
import Items from '../data.js';

let name;


const Login = () => {
    return (
        <form class="form-signin" method="POST" id='signin' >
            <h1>eVote</h1>
            <div class="form-group-signin">
                <input type="email" placeholder=" " id="email" required></input>
                    <label for="email">Name</label>
                    <div class="error">
                        <i class="fas fa-exclamation-circle"></i>
                    </div>
        </div>
                <div class="form-group-signin">
                    <input type="name" placeholder=" " id="name" required></input>
                        <label for="name">Card Number</label>
                        <div class="error">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
        </div>
            <Link to="/vote" className="input">
                <input type="submit" value="Enter"></input>
            </Link>
             
        </form>
    );
};

export default Login;
