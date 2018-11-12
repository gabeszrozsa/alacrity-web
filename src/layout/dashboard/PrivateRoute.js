import React from 'react'
import AuthService from '../../api/AuthService'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = AuthService.isLoggedIn();
  console.log(isLoggedIn);

  return (
    <Route {...rest} render={props => isLoggedIn ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    }/>
  )
}

export default PrivateRoute;
