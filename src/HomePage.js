import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
  import {connect} from 'react-redux'

function HomePage(props) {
  const [islogin , setLogin] = useState(false)
  useEffect(() => {
        if (props.signed_in_user.user && props.signed_in_user.user.id) {
          setLogin(true)
        } else
        {
          setLogin(false)
        }                                  
  },[props]);

    return (
        <div style={{'marginTop': '25%' , 'marginLeft': '33%'}}>
            <h2 >WelcomeTo Demo Applcation</h2>
            {
              !islogin 
              ?
              <>
              <Link to="signIn">
              <button className="cancelbtn" style={{'width': '20%'}}>Sign In</button>
            </Link>
            <Link to="/signUp">
              <button style={{'width': '20%'}}>Sign Up</button>
            </Link>
            </>
            :
            <button style={{'width': '20%'}}>Logout</button>
            }
         
        </div>
    );
}
const mapStateToProps = (state) => {
  debugger
  return {
      posts: state.posts,
      signed_in_user: state.signInReducer.Users,
      signed_up_user: state.signUpReducer.Users
  }
}

export default connect(mapStateToProps)(HomePage);