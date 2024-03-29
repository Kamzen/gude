import React from "react";

import './mobileTopNav.scss';

const MobileTopNav = () => {
    return (
        <div className={'mobile-top-nav'}>
            <div className={'row'}>
                <div className={'col-xs-2 bd'}>
                    <i className="material-icons side-menu">menu</i>
                </div>
                <div className={'col-xs-8 bd'}>
                    <div className={'wrap'}>
                        <div className={'col-xs-10'}>
                            <input type={'search'} className={'form-control'} placeholder={'Search On Gude'}/>
                        </div>
                        <div className={'col-xs-2'}>
                            <i className={'fa fa-search'}> </i>
                        </div>
                    </div>
                </div>
                <div className={'col-xs-2 notif-icon bd'}>
                    <i className={'fa fa-bell-o bd'}> </i>
                </div>
            </div>
        </div>
    )
}

export default MobileTopNav;