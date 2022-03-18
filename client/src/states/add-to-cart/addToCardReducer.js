import post from "../../post";
import get from "../../get";

const addToCardReducer = (state = 0, action) =>{

    switch (action.type) {
        case  'ADD_TO_CART' :
            return action.payload
        default :
            return state
    }

}

export default addToCardReducer;
