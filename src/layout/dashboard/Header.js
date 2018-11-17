import React from 'react'
import { Layout } from 'antd';

import { AuthService } from './../../api/';
import UserAvatar from './../../components/UserAvatar';
import './dashboard-header.css';

const { Header } = Layout;

export default class AppLayoutHeader extends React.Component {
  render () {
    const user = AuthService.currentUser();
    return (
      <Header id="header">
          <h2>
            <UserAvatar displayName={user.displayName} size='large'/>
            { user.displayName }
          </h2>
      </Header>
    )
  }
}
