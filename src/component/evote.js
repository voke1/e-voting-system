import React from "react";
import { Link } from "react-router-dom";



const Evote = () => {
    return (
        <>
        <form class="form-signin" id='signin' >
           <div>
                    <h1>APC</h1>
                    <span class='font'>0</span>
                    <Link to="/vote" className="input">
                        <input type="submit" value="Vote"></input>
                    </Link>
            </div> 
            <div>
                    <h1>PDP</h1>
                    <span class='font'>0</span> 
                    <Link to="/vote" className="input">
                        <input type="submit" value="Vote"></input>
                    </Link>
            </div>
            

            </form>
        </>
            );
        };
        
    export default Evote;
