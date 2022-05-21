import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }


    return (
        <div className='login-form'>
            <div>
                <h2>LogIn</h2>
                <form onSubmit=''>
                    <input type="email" name='' id='' placeholder='Enter Your email' />
                    <br /><br />
                    <input type="password" name="" id="" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema john? <Link to="/register">Create an account</Link></p>
                <div>-----------or----------</div>
                <button className="btn-regular"
                onClick={handleGoogleLogIn}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;