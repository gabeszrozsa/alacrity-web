import React from 'react';

const LoginLayout = ({children, ...rest}) => {
  return (
    <div className="page page-login">
      <h1>login</h1>
      <div className="main">{children}</div>
    </div>
  )
}

export default LoginLayout;
