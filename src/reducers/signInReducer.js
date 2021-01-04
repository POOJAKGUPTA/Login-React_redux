import { 
    SIGN_IN_USER,
  } from "../action/action";

  const INITIAL_STATE = {
    Users: [],
    loading : false,
  };

  const signInReducer =  (state = INITIAL_STATE, action) => {  
    switch (action.type) {
      case SIGN_IN_USER: {
        return {
          ...state,
          Users: action.signin_users.data,
          loading: false
        };
      }
      default:
        return state;
    }
  };
export default signInReducer;