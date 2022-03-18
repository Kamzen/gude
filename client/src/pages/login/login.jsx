import React, {useState} from "react";

import img from '../../images/login.jpg';
import icon from '../../images/icon.jpeg';

import './login.scss';
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import RespComponent from "../../components/resp-component/respComponent";


const  Login = ({history}) => {
    const [errEmail,setErrEmail] = useState('')
    const [errPass,setErrPass] = useState('')
    const [showResp,setShowResp] = useState(false)
    const [err,setErr] = useState(false)
    const [errMsg,setErrMsg] = useState('')

    const login = (e) => {
        e.preventDefault();
        axios({
            url : 'http://localhost:8080/auth/login',
            method : 'POST',
            data : new FormData(document.getElementById('login-form')),
            withCredentials : true
        }).then(resp => {
            setShowResp(false)
            setErrEmail('')
            setErrPass('')
            if (resp.data.hasOwnProperty('validate')){
                console.log(resp);
                resp = resp.data.err;
                resp.forEach(el => {
                    if (el.param === 'email'){
                        setErrEmail('')
                        setErrEmail(el.msg)
                    }
                    if (el.param === 'password'){
                        setErrPass('')
                        setErrPass(el.msg)
                    }
                })
            }else{
                setShowResp(true)
                setErr(resp.data.err)
                setErrMsg(resp.data.msg)

                if (!resp.data.err){
                    localStorage.setItem('jwt', resp.data.token)
                    setTimeout(() => {
                        history.push('/home')
                    }, 1000)
                }
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div className={'login'}>
            {
                showResp ? <RespComponent err={!err} msg={errMsg} />: ''
            }

            <div className={'img-logo'}>
                <img src={img} alt={'Login Image'}/>
            </div>
            <div className={'form'}>
                <form id={'login-form'}>
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

                    <label>Email Address <span>{errEmail}</span> </label>
                    <input type={'email'} name={'email'} className={'form-control'} placeholder={'Email Address'}/>

                    <br />

                    <label>Password <span>{errPass}</span> </label>
                    <input type={'password'} name={'password'} className={'form-control'} placeholder={'Password'}/>

                    <br />
                    <div className={'forgot-password'}><Link to={''}>Forgot Password?</Link></div>
                    <br />

                    <button onClick={e=>login(e)} className={'btn btn-default login-btn'}>Login</button>
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