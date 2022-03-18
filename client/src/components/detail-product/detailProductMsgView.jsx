import React from "react";
import DetailProductMsg from "./detailProductMsg";
import img from '../../images/default_img.png';
import './detailProductMsgView.scss';
const DetailProductMsgView = () => {
    return(
        <div className={'detail-product-msg-view'}>
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <div className={'row'}>
                <div className={'col-lg-1 input-img'}>
                    <img src={img} alt={''} className={''} />
                </div>
                <div className={'col-lg-10'}>
                    <input type={'text'} placeholder={'Write what you want to know'} className={'form-control bd'}/>
                </div>
                <div className={'col-lg-1 icon'}>
                    <i className={'fa fa-paper-plane'}> </i>
                </div>
            </div>
        </div>
    )
}

export default DetailProductMsgView;