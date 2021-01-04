import {
    SIGN_IN_USER,
} from "./action";
import axios from 'axios';
import {AppUrl} from './appConfig'
import { redirect } from "../action/redirect";

export const GetUsers = (data) => {
    return dispatch => {
        axios.request({
            method: 'POST',
            "content-type": "application/json",
            url: AppUrl,
            data
          })
        .then(res => {
            dispatch({
                type: SIGN_IN_USER,
                signin_users: res
            });
            dispatch(redirect("/post"));
        })
    };
};
