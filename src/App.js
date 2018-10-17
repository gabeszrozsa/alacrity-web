import React, { Component } from 'react';

import { AppLayout, LoadingBar } from './layout';
import AuthService from './api/AuthService';

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
    return this.state.isAuthenticating ? (<LoadingBar text="Trying to authenticate..."/>) : (<AppLayout/>);
  }
}
