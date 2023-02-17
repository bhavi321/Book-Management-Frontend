import React from 'react'
import './Login.css'
function Login(){
    return (
        <div id='login'>
            <h1>User Login</h1>
            <br />
            <form>
                <section>
                    <label htmlFor='Email'>Email Id :</label> 
                    <input type= "text" id="Email" placeholder='please enter email'></input>
                </section>
                <br />
                <section>
                    <label htmlFor='Password'>Password :</label> 
                    <input type= "password" id="Password" placeholder='please enter password'></input>
                </section>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}


export default Login;