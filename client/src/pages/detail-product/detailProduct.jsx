import React from "react";

import product_img from '../../images/product_img2.PNG';

import './detailProduct.scss';

const DetailProduct = () => {
    return(
        <div className={'detail-product'}>
            <div className={'product-details'}>
                <div className={'product-details-img'}>
                    <img src={product_img} alt={''}/>
                </div>
                <div className={'product-info'}>
                    <div className={'row'}>
                        <div className={'col-lg-11'}>
                            <div className={'product-name'}>Apple Macbook 512GB</div>
                        </div>
                        <div className={'col-lg-1'}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailProduct;