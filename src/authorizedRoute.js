import { Redirect } from 'react-router-dom'

  function AuthorizedRoute(props) {

    const Component = props.component;
    const isAuthenticated = props.isAuthenticated

    return (
        isAuthenticated ?
        <Component />
        :
        <Redirect to={{ pathname: '/signIn' }} />
    );
  }
  
  export default AuthorizedRoute;
  