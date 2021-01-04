import { REDIRECT } from "./action";
// action creators
export const redirect = link => {
  return { type: REDIRECT, payload: link };
};