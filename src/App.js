import React, { Component } from 'react';
import { Spin } from 'antd';
import { AppLayout } from './layout';
import AuthService from './api/AuthService';

const LoadingBar = () => {
  return (
    <div className="authenticating">
        <h1>
          <Spin size="large" />
          Trying to authenticate...
        </h1>
    </div>
  )
}


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticating: true
    };
  }

  componentDidMount() {
    AuthService.preAuthenticate()
      .then(() => this.setState({ isAuthenticating: false }));
  }

  render() {
    return this.state.isAuthenticating ? (<LoadingBar/>) : (<AppLayout/>);
  }
}
