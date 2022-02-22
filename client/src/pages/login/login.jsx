import React from "react";

import img from '../../images/login.jpg';
import icon from '../../images/icon.jpeg';

import './login.scss';
import {Link} from "react-router-dom";

const  Login = () => {
    return(
        <div className={'login'}>
            <div className={'img-logo'}>
                <img src={img} alt={'Login Image'}/>
            </div>
            <div className={'form'}>
                <form>
                    <div className={'login-icon'}>
                        <img src={icon} alt={'Login Icon'}/>
                    </div>

                    <br />
                    <div className={'login-wel-msg'}><p>Welcome To Gude Marketplace</p></div>

                    <div className={'route-to-reg'}><p>Dont Have An Account? <Link to={'/register'}>Register</Link></p></div>

                    <br />
                    <button className={'btn btn-default fb-btn'}>Login With Facebook</button>

                    <br />
                    <br />
                    <br />

                    <label>Email Address</label>
                    <input type={'email'} className={'form-control'} placeholder={'Email Address'}/>

                    <br />

                    <label>Password</label>
                    <input type={'password'} className={'form-control'} placeholder={'Password'}/>

                    <br />
                    <div className={'forgot-password'}><Link to={''}>Forgot Password?</Link></div>
                    <br />

                    <button className={'btn btn-default login-btn'}>Login</button>
                    <br />
                    <br />
                    <br />

                    <div className={'terms-conditions'}>
                        <p>By joining, you agree to the <Link to={''}>Terms</Link> and <Link to={''}>Privacy Policy</Link>.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;