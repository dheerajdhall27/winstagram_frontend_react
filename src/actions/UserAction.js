import {
  LOGIN_USER,
  REGISTER_USER,
  LOGIN_FAILED,

  CLOSE_ALERT, GET_PROFILE, GET_PROFILE_FOR_CURRENT_USER,REGISTER_FAILED,
    UPDATE_PROFILE


} from "../common/constants";


export const signupUser = (user) => ({
  type: REGISTER_USER,
  registeredUser: user
});

export const signupFailed = () => ({
  type: REGISTER_FAILED
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  loginUser: user
});


export const loginFailed = () => ({
  type: LOGIN_FAILED
});


export const closeAlert = () => ({
  type: CLOSE_ALERT
});


export const getUserInformation = (user) => ({
  type: GET_PROFILE,
  loggedInUser: user
});

export const getUserInformationByHandle = (user) => ({
  type: GET_PROFILE_FOR_CURRENT_USER,
  user: user
});

export const updateUser = (editedUser) => ({
  type: UPDATE_PROFILE,
  editedUser: editedUser
});


