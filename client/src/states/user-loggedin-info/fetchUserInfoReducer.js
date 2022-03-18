
const fetchUserInfoReducer = (state = {loggedIn : false, userLoggedInInfo : {}},action) => {
    switch (action.type){
        case 'FETCH_USER_LOGGED_IN_INFO' :
            return {
                loggedIn : true,
                userLoggedInInfo : action.payload
            }
        default :
            return state;
    }
}

export default fetchUserInfoReducer;