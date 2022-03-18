import React, {useEffect, useState} from "react";

import './explore.scss';
import {Link, Redirect, withRouter} from "react-router-dom";
import PromoProduct from "../products/promoProduct";
import Product from "../products/product";
import {useDispatch, useSelector} from "react-redux";
import RespComponent from "../resp-component/respComponent";
import get from "../../get";
import fetchProductsAction from "../../states/fetch-products/fetchProductsAction";


const Explore = ({history}) => {

    const dispatch = useDispatch();
    const[loading,setLoading] = useState(false)

    const products = useSelector(state => state.products);
    const isLoggedIn = useSelector(state => state.user_info.loggedIn)

    useEffect(async () => {
        setLoading(true)
        try{
            const products = await get('http://localhost:8080/products')
            console.log(products.data.r)
            if (products.data.r.length > 0){
                setLoading(false)
                dispatch(fetchProductsAction(products.data.r))
            }
        }catch (e) {
            console.log(e)
        }

    },[])

    if (loading){
        return(
            <div
                className={'center'}
                style={{marginTop : '20px'}}>
                <div className={'loader'}> </div>
            </div>
        )
    }else {

        return (

            <div className={'explore'}>
                {/*{*/}
                {/*    !isLoggedIn ? <Redirect to={'/login'} /> : ''*/}
                {/*}*/}
                <div className={'by-category'}>
                    <ul>
                        <li>
                            <Link to={''}>New Arrivals</Link>
                        </li>
                        <li>
                            <Link to={''}>On Sale</Link>
                        </li>
                        <li>
                            <Link to={''}>Black Friday</Link>
                        </li>
                        <li>
                            <Link to={''}>Weekly Sale</Link>
                        </li>
                    </ul>
                </div>
                <br/>
                <div className={'row'}>
                    <PromoProduct/>
                    {
                        products.length > 0 && products.map((product, i) => {
                            return <Product product={product} key={i}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Explore);