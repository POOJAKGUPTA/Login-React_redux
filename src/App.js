import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {connect} from 'react-redux'
import {compose } from 'redux'

import Form from './form'
import './App.css';
import HomePage from "./HomePage";
import PostForm from "./post/Postfrom";
import AllPost from "./post/Allpost"
function App(props) {
  return (
    <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/ ">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/  navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/ ">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/post ">Post</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/ " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/  ">Action</a>
                <a className="dropdown-item" href="/  ">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/  ">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/  " tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route  path="/signIn">
          <Form />
        </Route>
        <Route  path="/signUp">
          <Form />
        </Route>
        {
          props.signed_in_user.user && props.signed_in_user.user.authentication_token 
          ?
          <Route  path="/post">
          <PostForm />
          <AllPost />
        </Route>
        :
        <Redirect to={{ pathname: '/signIn' }} />
        }
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => {
  debugger
  return {
      signed_in_user: state.signInReducer.Users,
      signed_up_user: state.signUpReducer.Users
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(App);
