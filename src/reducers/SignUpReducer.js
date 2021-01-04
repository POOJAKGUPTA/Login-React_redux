import { 
    SIGN_UP_USER,
  } from "../action/action";

  const INITIAL_STATE = {
    Users: [],
    loading : false,
  };

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SIGN_UP_USER: {
        return {
          ...state,
          Users: action.signup_users.data,
          loading: false
        };
      }
      default:
        return state;
    }
  };