import {
    SIGN_UP_USER,
} from "./action";
import axios from 'axios';


export const AddUser = (data) => {
    return dispatch => {
        axios.request({
            method: 'POST',
            "content-type": "application/json",
            url: `http://127.0.0.1:5000/api/v1/sign_up`,
            data
          })
        .then(res => {
            const persons = res.data;
            dispatch({
                type: SIGN_UP_USER,
                signup_users: res
            });
        })
    };
};
