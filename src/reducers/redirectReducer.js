import {REDIRECT} from '../action/action'
const redirectReducer = (state = {}, action) => {
    debugger
  switch (action.type) {
    case REDIRECT:
      return { redirectTo: action.payload };
    default:
      return state;
  }
};

export default redirectReducer;