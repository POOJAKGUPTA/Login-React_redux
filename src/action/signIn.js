import {
    SIGN_IN_USER,
} from "./action";
import axios from 'axios';


export const GetUsers = (data) => {
    return dispatch => {
        console.log("GetUsers dispatch");
        axios.request({
            method: 'POST',
            "content-type": "application/json",
            url: `http://127.0.0.1:5000/api/v1/sign_in`,
            data
          })
        .then(res => {
            const persons = res.data;
            dispatch({
                type: SIGN_IN_USER,
                signin_users: res
            });
            debugger
        })
    };
};
