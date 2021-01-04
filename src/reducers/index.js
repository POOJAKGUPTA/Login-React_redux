import { combineReducers } from 'redux';
import postReducer from './postReducer';
import signInReducer from './signInReducer';
import signUpReducer from "./SignUpReducer";

  const appReducer = combineReducers({
    /* your app’s top-level reducers */
  signInReducer ,
  signUpReducer,
  posts:postReducer
  })
  

  const rootReducer = (state, action) => {
    if (action.type === "SIGNOUT_REQUEST") {
        // for all keys defined in your persistConfig(s)
        debugger
        window.localStorage.removeItem('persist:root')
        // storage.removeItem('persist:otherKey')

        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;