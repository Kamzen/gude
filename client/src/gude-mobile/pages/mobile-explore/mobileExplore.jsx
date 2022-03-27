import React from "react";

import './mobileExplore.scss';
import MobileProductPromo from "../../components/mobile-product/mobileProductPromo";
import HMenu from "../../components/h-menu/hMenu";

const MobileExplore = () => {
    return(
        <div className={'mobile-explore'}>
            <MobileProductPromo />
            <HMenu />
        </div>
    )
}

export default MobileExplore;