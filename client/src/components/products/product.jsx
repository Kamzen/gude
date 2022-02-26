import React from "react";
import productImg1 from '../../images/pruduct_img1.png';
import './product.scss';
const Product = () => {
    return(
        <div className={'col-lg-3 single-product'}>
           <div className={'space-product'}>
               <div className={'product-img'}>
                   <img src={productImg1} alt={''}/>
               </div>
               <div className={'product-name'}>
                   <span>Laptop</span>
               </div>
               <br />
               <div className={'quantity'}>
                   <span>9 Available / New</span>
               </div>
               <br />
               <div className={'row sku-num'}>
                   <div className={'col-lg-8 sku-number'}>
                       <span>SKU Number : 09403049305t4863</span>
                   </div>
                   <div className={'col-lg-4 price price'}>
                       <span>399</span>
                   </div>
               </div>
               <div className={'row product-btn'}>
                   <div className={'col-lg-6 add-to-cart'}>
                       <button className={'btn btn-default'}>ADD TO CARD</button>
                   </div>
                   <div className={'col-lg-6 add-to-wishlist'}>
                       <button className={'btn btn-default'}>WISHLIST</button>
                   </div>
               </div>
           </div>
        </div>
    )
}
export default Product;