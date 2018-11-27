import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './login.css'

const AuthLayout = ({children, ...rest}) => {
  return (
    <div className="page page-login">
      <h1>login</h1>
      <div className="main">{children}</div>
    </div>
  )
}

const AuthRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <AuthLayout>
          <Component {...matchProps} />
      </AuthLayout>
    )} />
  )
};

export default AuthRoute;
