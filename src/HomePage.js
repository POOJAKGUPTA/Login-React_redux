import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'

import {
    Link
  } from "react-router-dom";
  import {connect} from 'react-redux'

function HomePage(props) {
  const [islogin , setLogin] = useState(false)
  useEffect(() => {
    debugger
        if (props.signed_in_user.user && props.signed_in_user.user.authentication_token) {
          setLogin(true)
        } else
        {
          setLogin(false)
        }                                  
  },[props]);

  const handleLogout = () => {
    props.dispatch({
      type: 'SIGNOUT_REQUEST'
    });
  }
     return (
        <div style={{'marginTop': '25%' , 'marginLeft': '33%'}}>
            <h2 >Welcome To Demo Application</h2>
            {
              !islogin 
              ?
              <>
                <Link to="/signIn">
                  <button className="cancelbtn" style={{'width': '20%'}}>Sign In</button>
                </Link>
                <Link to="/signUp">
                  <button style={{'width': '20%'}}>Sign Up</button>
                </Link>
              </>
            :
            <button style={{'width': '20%'}} onClick={handleLogout}>Logout</button>
            }
        </div>
    );
}
const mapStateToProps = (state) => {
  return {
      posts: state.posts,
      signed_in_user: state.signInReducer.Users,
      signed_up_user: state.signUpReducer.Users
  }
}

export default connect(mapStateToProps)(HomePage);