
const addToCartAction = (count) => {
    return{
        type : 'ADD_TO_CART',
        payload : count
    }
}

export default addToCartAction;