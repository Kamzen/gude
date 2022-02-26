import React from "react";

import defImag from '../../images/default_img.png';

import './topNav.scss';

const TopNav = () => {
    return(
        <div className={'top-nav'}>
            <div className={'row'}>
                <div className={'col-lg-8'}>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className={'form-control'}/></td>
                                <td>
                                    <select className={'form-control all-category'}>
                                        <option>All categories</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={'col-lg-4'}>
                    <div className={'row'}>
                        <div className={'col-md-4'}>
                            <button className={'btn btn-default'}>
                                <i className={'fa fa-send-o'}> </i><span>Sell On GUDE</span>
                            </button>
                        </div>

                        <div className={'col-md-8'}>
                            <ul>
                                <li>
                                    <i className={'fa fa-comment'}> </i>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav