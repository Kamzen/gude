const fetchProductsAction = (products) => {
    return{
        type : 'FETCH_PRODUCTS',
        payload : products
    }
}
export default fetchProductsAction;