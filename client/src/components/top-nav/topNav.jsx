
import defImag from '../../images/default_img.png';

import './topNav.scss';
import {useSelector} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import SearchModal from "../search-modal/searchModal";
import {useEffect, useState} from "react";
import post from "../../post";
const TopNav = ({history}) => {

    const _user_id = useSelector(state => state.user_info.userLoggedInInfo.id)
    const count = useSelector(state => state.cart_count)
    const [isStudent,setIsStudent] = useState(false)
    const [registerStudent,setRegisterStudent] = useState(false)
    useEffect(async () => {
        /*
            Fetch Cart Count
         */

        await post('http://localhost:8080/add/cart/count').then(resp => {
            console.log(resp)
        })
    })

    const sellOnGude = async (e) => {
        e.preventDefault()
        setIsStudent(false)
        setRegisterStudent(false)
        await post('http://localhost:8080/auth/check-student',{
            _user_id : _user_id
        }).then(resp => {
            if (resp.data.isStudent) {
                history.push('/add')
            }else{
                history.push('/student-register')
            }
        })
    }

    return(
        <div className={'top-nav-bg'}>
            {/*<SearchModal />*/}
            <div className={'top-nav'}>
                <div className={'row'}>
                    <div className={'col-lg-8 col-xs-12'}>
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
                    <div className={'col-lg-4 col-xs-12 right-nav'}>
                        <div className={'row'}>
                            <div className={'col-md-4 col-xs-12'}>
                                <button className={'btn btn-default'} onClick={e=>sellOnGude(e)}>
                                    <i className={'fa fa-send-o'}> </i><span>Sell On GUDE</span>
                                </button>
                            </div>

                            <div className={'col-md-8 col-xs-12'}>
                                <ul>
                                    <li>
                                        <NavLink to={'#'} activeClassName={'active-link'}>
                                            <i className={'fab fa-facebook-messenger'}> </i>
                                            <div className={'msg-badge'}><span>9</span></div>
                                        </NavLink>
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
                                        <NavLink to={'/cart'} activeClassName={'active-link'} activeStyle={{color : 'rgba(255,127,80, 1)'}}>
                                            <i onClick={()=>history.push('/cart')} className={'fa fa-shopping-bag'}> </i>
                                        </NavLink>
                                        {
                                            count > 0 && count <= 9 && <div className={'msg-badge'}><span>{count}</span></div>
                                        }
                                        {
                                            count > 9 && <div className={'msg-badge'}><span>{count}+</span></div>
                                        }
                                    </li>
                                    <li><div className={'pro-img'}><img src={defImag} alt={''}/></div></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(TopNav)