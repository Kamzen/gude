import React from "react";
import './bottomNav.scss';
import defImag from "../../images/default_img.png";
const BottomNav = () => {
    return(
        <div className={'bottom-nav'}>
            <ul>
                <li>
                    <i className={'fab fa-facebook-messenger'}> </i>
                    <div className={'msg-badge'}><span>9</span></div>
                </li>
                <li>
                    <i className="fa fa-bell-o"> </i>
                    <div className={'msg-badge'}><span>9</span></div>
                </li>
                <li>
                    <i className={'fa fa-heart-o'}> </i>
                    <div className={'msg-badge'}><span>9</span></div>
                </li>
                <li>
                    <i className={'fa fa-shopping-bag'}> </i>
                    <div className={'msg-badge'}><span>9</span></div>
                </li>
                <li><img src={defImag} alt={''}/></li>
            </ul>
        </div>
    )
}

export default BottomNav;