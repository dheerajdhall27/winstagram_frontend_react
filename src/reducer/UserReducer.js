import {
    CLOSE_ALERT, GET_PROFILE, GET_PROFILE_FOR_CURRENT_USER,
    LOGIN_FAILED,
    LOGIN_USER,

    REGISTER_USER, UPDATE_PROFILE, REGISTER_FAILED

} from "../common/constants";

const initialState = {
    user: {
        email: 'Dummy@dummy.com',
        firstName: 'Joe',
        lastName: 'Bloggs',
        username : 'joebloggs',
        password : 'AB',
        role: "0",
        verifyPassword : 'AB'
    },
    currentUser: {
        email: 'Dummy@dummy.com',
        firstName: 'Joe',
        lastName: 'Bloggs',
        username : 'joebloggs',
        password : 'AB',
        role: "0",
        verifyPassword : 'AB'
    },
    successful: true
};

const UserReducer = (state = {initialState},action) => {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.registeredUser
            };
        case REGISTER_FAILED:
            return{
                ...state,
                successful: false
            };
        case LOGIN_USER:
            return {
                ...state,
                user: action.loginUser,
                successful: true
            };
        case LOGIN_FAILED:
            return{
                ...state,
                successful: false
            };
        case CLOSE_ALERT:
            return {
                ...state,
                successful: true
            };
        case UPDATE_PROFILE: {
            // console.log(action.editedUser);
            return {
                ...state,
                user: action.editedUser
            }
        }
        case GET_PROFILE: {
            return {
                ...state,
                user: action.loggedInUser
            };
        }
        case GET_PROFILE_FOR_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return {...state}
    }
};

export default UserReducer
