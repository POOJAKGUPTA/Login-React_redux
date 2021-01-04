import React, { useState } from 'react';
import { connect } from 'react-redux';
import './form.css'
import {
    GetUsers
  } from "./action/signIn";
  import {
    AddUser
  } from "./action/signUp";

function Form(props) {
    const location = window.location.pathname
    const [data, setData] = useState({});
    const handleChangeFunction = (event) => {
        let hash = data
        let field = event.target.name
        hash[field] = event.target.value
        setData(hash)
    }
    const GetUsers =  props.GetUsers
    const AddUser =  props.AddUser
    const handleSignin = () => {
        let sendData = {}
        if (data.password == data.password_confimation)
        {
            let user = {}
            user['email'] =  data.email
            user ['password'] =  data.password
            sendData = {user: user}
            GetUsers(sendData)
        }
        else
        {
            alert('Password doesnt match')
        }
    }

    const handleSignup = () => {
        let sendData = {}
        if (data.password == data.password_confimation)
        {
            sendData = {user: data}
            AddUser(sendData)
        }
        else
        {
            alert('Password doesnt match')
        }
    }
    return (
        <div>
            <div>
                <div className="container">
                    <h1>{location === '/signIn' ? "Sign In" : "Sign Up"}</h1>
                    <p>Please fill in this form to {location !== '/signIn' ? "create an account." : "login in system"} </p>
                    <hr />
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required onChange={handleChangeFunction} />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required onChange={handleChangeFunction} />

                    <label for="password_confimation"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="password_confimation" required onChange={handleChangeFunction} />

                    <div className="clearfix">
                        {
                            location === '/signIn'
                                ?
                                <button className="cancelbtn" onClick={handleSignin}>Sign In</button>
                                :
                                <button type="submit"  onClick={handleSignup} className="signupbtn">Sign Up</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapDispacthToProps = dispatch => {
    return {
      GetUsers: (data) => {
        dispatch(GetUsers(data))
      },
      AddUser: (data) => {
          dispatch(AddUser(data))
      }    
    };
}
export default connect(null,
    mapDispacthToProps
  )(Form);