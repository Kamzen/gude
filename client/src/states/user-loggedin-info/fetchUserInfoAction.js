
const fetchUserInfoAction = (userInfo) => {
    return{
        type : 'FETCH_USER_LOGGED_IN_INFO',
        payload : userInfo
    }
}

export default fetchUserInfoAction;