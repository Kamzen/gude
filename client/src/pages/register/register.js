import React from "react";

import img from '../../images/login.jpg';
import icon from '../../images/icon.jpeg';

import './register.scss';
import {Link} from "react-router-dom";

const  Register = () => {
    return(
        <div className={'register'}>
            <div className={'img-logo'}>
                <img src={img} alt={'Register Image'}/>
            </div>
            <div className={'form'}>
                <form>
                    <div className={'register-icon'}>
                        <img src={icon} alt={'Register Icon'}/>
                    </div>
                    <br />
                    <div className={'register-wel-msg'}><p>Join Gude Marketplace</p></div>
                    <div className={'route-to-log'}><p>Already Have An Account? <Link to={'/login'}>Login</Link></p></div>
                    <br />
                    <button className={'btn btn-default fb-btn'}>Login With Facebook</button>
                    <br />
                    <br />
                    <br />
                    <div className={'row'}>
                        <div className={'col-lg-6'}>
                            <label>Firstname</label>
                            <input type={'text'} placeholder={'Firstname'} className={'form-control first'}/>
                        </div>
                        <div className={'col-lg-6'}>
                            <label>Lastname</label>
                            <input type={'text'} placeholder={'Lastname'} className={'form-control'}/>
                        </div>
                    </div>
                    <br />
                    <br />
                    <label>Email Address</label>
                    <input type={'email'} className={'form-control'} placeholder={'Email Address'}/>
                    <br />
                    <label>Password</label>
                    <input type={'password'} className={'form-control'} placeholder={'Password'}/>
                    <br />
                    <br />
                    <button className={'btn btn-default register-btn'}>Register</button>
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

export default Register;