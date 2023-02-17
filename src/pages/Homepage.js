import React from "react";
import { Link } from "react-router-dom";


function Homepage(){
    return(
        <div>
            <h1>WELCOME TO HOMEPAGE</h1>
            <label>Already Have An Account 
                 <Link to = "/Login">Login </Link><br/></label>
            <label>Click Here to SignIN <Link to="/Signup">Signup</Link></label>
        </div>
    )
}
export default Homepage