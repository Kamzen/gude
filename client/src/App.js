import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";

import './global.css';
import './App.css';
import Register from "./pages/register/register";
import Student from "./pages/student/student";
import Recovery from "./pages/recovery/recovery";
import Explore from "./components/explore/explore";
import Root from "./pages/root/root";
import DetailProduct from "./pages/detail-product/detailProduct";
import AddProduct from "./pages/add-product/addProduct";
import CartListing from "./pages/cart-listing/cartListing";
import Electronics from "./pages/electronics/electronics";
import Outdoors from "./pages/outdoors/outdoors";
import {useEffect} from "react";
import post from "./post";
import {useDispatch} from "react-redux";
import fetchUserInfoAction from "./states/user-loggedin-info/fetchUserInfoAction";

const App = () => {
    const dispatch = useDispatch();
    useEffect(async () => {
        /*
            Set User Logged In State
         */
        await post('http://localhost:8080/auth/user', {
            jwt : localStorage.getItem('jwt')
        }).then(resp => {
            if (resp.data.err){
                console.log(resp.data.msg)
            }else{
                console.log(resp)
                dispatch(fetchUserInfoAction(resp.data.resp))
            }
        })

    },[])

    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact>
                    <Redirect to={'/login'}/>
                </Route>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/student-register'} component={Student}/>
                <Route path={'/recovery'} component={Recovery}/>
                {/*
                Private Routes
              */}
                <Route path={'/home'} exact>
                    <Root> <Explore/> </Root>
                </Route>
                <Route path={'/home/:product_id'}>
                    <Root>
                        <DetailProduct/>
                    </Root>
                </Route>
                <Route path={'/add'}>
                    <Root>
                        <AddProduct />
                    </Root>
                </Route>
                <Route path={'/cart'}>
                    <Root>
                        <CartListing />
                    </Root>
                </Route>
                <Route path={'/electronics'}>
                    <Root>
                        <Electronics />
                    </Root>
                </Route>
                <Route path={'/outdoors'}>
                    <Root>
                        <Outdoors />
                    </Root>
                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default App;
