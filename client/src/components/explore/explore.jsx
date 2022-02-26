import React from "react";

import './explore.scss';
import {Link} from "react-router-dom";
import PromoProduct from "../products/promoProduct";

const Explore = () => {
    return(
       <div className={'explore'}>
           <div className={'by-category'}>
               <ul>
                   <li>
                       <Link>New Arrivals</Link>
                   </li>
                   <li>
                       <Link>On Sale</Link>
                   </li>
                   <li>
                       <Link>Black Friday</Link>
                   </li>
                   <li>
                       <Link>Weekly Sale</Link>
                   </li>
               </ul>
           </div>
           <br />
           <div className={'row'}>
               <PromoProduct />
           </div>
       </div>
    )
}

export default Explore;