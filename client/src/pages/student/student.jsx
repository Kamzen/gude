import React from "react";

import img from '../../images/login.jpg';
import cover from '../../images/student_cover.png';
import defaultImg from '../../images/pro_pic.png';

import './student.scss';
import {Link} from "react-router-dom";

const Student = () => {
    return(
        <div className={'be-student'}>
            <div className={'img-logo'}>
                <img src={img} alt={'Be Student Image'}/>
            </div>
            <div className={'student'}>
                <div className={'student-cover-photo'}>
                    <img src={cover} alt={'Student Cover Image'}/>
                </div>
                <div className={'student-pro-img'}>
                    <img src={defaultImg} alt={'Student Profile Image'}/>
                </div>
                <br/>
                <br />
                {/*<div className={'student-change-btn'}>*/}
                {/*    <button className={'btn btn-default'}>Change</button>*/}
                {/*</div>*/}
                <br />
                <br />
                <br />
                <form>
                    <div className={'row'}>
                        <div className={'col-lg-6'}>
                            <label>Phone Number</label>
                            <input type={'tel'} placeholder={'Phone Number'} className={'form-control'}/>
                        </div>
                        <div className={'col-lg-6'}>
                            <label>Alternative Number</label>
                            <input type={'tel'} placeholder={'Alternative Number'} className={'form-control'}/>
                        </div>
                    </div>
                    <br />
                    <label>Student Email</label>
                    <input type={'email'} placeholder={'Student Email'} className={'form-control'}/>
                    <br />
                    <label>Location</label>
                    <input type={'tel'} placeholder={'Location'} className={'form-control'}/>
                    <br />
                    <label>Payment Methods</label>
                    <div className={'payment-methods'}> </div>

                    <br/>
                    <br/>
                    <button className={'btn btn-default'}>Save & Continue</button>
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

export default Student