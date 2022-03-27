import React from "react";

import './home.scss';
import MobileTopNav from "../../components/mobile-topnav/mobileTopNav";
import MobileBottomNav from "../../components/mobile-bottomnav/mobileBottomNav";

const Home = ({children}) => {
    return (
        <div className={'mobile-home'}>
            <MobileTopNav/>
            <MobileBottomNav/>
            <div className={'mobile-explore-content'}>
                {children}
            </div>
        </div>
    )
}

export default Home;