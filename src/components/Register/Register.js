import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Enter your email' />
                    <br /><br />
                    <input type="password" name="" id="" placeholder='Enter an unique password' />
                    <br /><br />
                    <input type="password" name="" id="" placeholder='Re-enter Password'/>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already has an account? <Link to="/login">Login</Link></p>
                <div>----------or-----------</div>
                <br />
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;