import React, {Component} from "react";
import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';

export default class Login extends Component {
    state = {

    }
    render() {
       
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

                <Link to="/vote" className="btn-primary">
                    <input type="submit" value="Enter"/>
          </Link>


            </form>
        )

      
    }
  
}

