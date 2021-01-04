import { LOGGED_IN } from "./action";
// action creators
const isLoggedIn = true
export const redirect = link => {
  return { type: LOGGED_IN, payload: true };
};