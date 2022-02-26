import React from "react";

import logoImg from '../../images/logo.png';

import './sideNav.scss';
import {Link, NavLink} from "react-router-dom";

const SideNav = () => {
    return(
        <div className={'side-nav'}>
            <div className={'logo-img'}>
                <img src={logoImg} alt={''}/>
            </div>
            <ul className={'list-group'}>
                <li className={'list-group-item'}>
                    <i className="material-icons devices">devices</i>
                    <Link to={''}>Electronics</Link>
                </li>
                <li className={'list-group-item'}>
                    <i className={'fas fa-campground'}> </i>
                    <Link to={''}>Outdoors</Link>
                </li>
                <li className={'list-group-item'}>
                    <i className={'fab fa-xbox'}> </i>
                    <Link to={''}>Gaming</Link>
                </li>
                <li className={'list-group-item'}>
                    <i className={'fab fa-freebsd'}> </i>
                    <Link to={''}>Freebies</Link>
                </li>
                <li className={'list-group-item'}>
                    <i className={'fa fa-tachometer'}> </i>
                    <Link to={''}>Appliances</Link>
                </li>
                <li className={'list-group-item'}>
                    <i className={'fa fa-book'}> </i>
                    <Link to={''}>Stationery</Link>
                </li>
            </ul>

        </div>
    )
}

export default SideNav