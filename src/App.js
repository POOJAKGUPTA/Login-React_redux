import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Form from './form'
import './App.css';
import HomePage from "./HomePage";
import PostForm from "./Postfrom";
import AllPost from "./Allpost"
function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Switch>
        <Route path="/signIn">
          <Form />
        </Route>
        <Route path="/signUp">
          <Form />
        </Route>
        <Route path="/post">
          <PostForm />
          <AllPost />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
