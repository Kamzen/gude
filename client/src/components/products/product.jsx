import React, {useState} from "react";

import './product.scss';
import {useDispatch, connect, useSelector} from "react-redux";
import addToCartAction from "../../states/add-to-cart/addToCartAction";
import post from "../../post";
import RespComponent from "../resp-component/respComponent";
import {Link} from "react-router-dom";

const Product = (props) => {
    const product = props.product;
    const dispatch = useDispatch()
    const count = 1;
    const [allowDispatch,setAllowDispatch] = useState(false);
    const [showResp,setShowResp] = useState(false)
    const [err,setErr] = useState(false);
    const [msg,setMsg] = useState('')
    const addToCart = (e) => {
        e.preventDefault()
        setShowResp(false)
        const {_id,category,product_img_url,isbn,imei,title,desc,condition,price,quantity,location,payment_method,_user_id} = product.product_info
        try{
            post('http://localhost:8080/add/cart',{
                _id,
                category,
                product_img_url,
                isbn,
                imei,
                title,
                desc,
                condition,
                price,
                quantity,
                location,
                payment_method,
                _user_id
            }).then(resp => {

                if (resp.data.err){
                    console.log(resp)
                    setErr(false)
                    setMsg(resp.data.msg)
                    setShowResp(true)
                }
                if (!resp.data.err){
                    console.log(resp.data)
                    setErr(true)
                    setMsg(resp.data.msg)
                    setShowResp(true)
                    dispatch(addToCartAction(resp.data.count))
                }
            })

        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={'col-lg-3 single-product'}>
            {
                showResp ? <RespComponent err={err} msg={msg} /> : ''
            }
            <div className={'space-product'}>
                <div className={'product-img'}>
                    <Link to={`/home/${product.product_info._id}`}><img src={product.product_info.product_img_url} alt={''}/></Link>
                </div>
                <div className={'product-name'}>
                    <span>{product.product_info.title}</span>
                </div>
                <br/>
                <div className={'quantity'}>
                    <span>{`${product.product_info.quantity} Available / ${product.product_info.condition}`}</span>
                </div>
                <br/>
                <div className={'row sku-num'}>
                    <div className={'col-lg-8 sku-number'}>
                        <span>SKU Number : 09403049305t4863</span>
                    </div>
                    <div className={'col-lg-4 price'}>
                        <span>{product.product_info.price}</span>
                    </div>
                </div>
                <div className={'row product-btn'}>
                    <div className={'col-lg-6 add-to-cart'}>
                        <button onClick={(e)=>{
                            addToCart(e)
                        }} className={'btn btn-default'}>
                            <i className={'fa fa-shopping-bag'}> </i>ADD TO CARD
                        </button>
                    </div>
                    <div className={'col-lg-6 add-to-wishlist'}>
                        <button className={'btn btn-default'}>
                            <i className={'fa fa-heart-o'}> </i> WISHLIST
                        </button>
                    </div>
                </div>
                <br />
                <div className={'col-location'}>
                    <span>Location : {product.product_info.location}</span>
                </div>
                <br />
                <div className={'list-date'}>
                    <span>Listed on : {product.product_info.createdAt}</span>
                </div>
            </div>
        </div>
    )
}
export default connect()(Product);