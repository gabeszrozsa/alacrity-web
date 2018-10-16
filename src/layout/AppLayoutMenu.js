import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
// const SubMenu = Menu.SubMenu;

export default class AppLayoutMenu extends React.Component {
  render () {
    return (
      <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">

          <Menu.Item key="1">
            <Link to="/">
            <Icon type="solution" />
            <span>Hírfolyam</span>
          </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/activities">
            <Icon type="trophy" />
            <span>Aktivitás</span>
          </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/events">
            <Icon type="calendar" />
            <span>Események</span>
          </Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/notifications">
            <Icon type="notification" theme="outlined" />
            <span>Értesítések</span>
          </Link>
          </Menu.Item>

          <Menu.Item key="5">
            <Link to="/locations">
            <Icon type="environment" />
            <span>Helyszínek</span>
          </Link>
          </Menu.Item>

         {/*
        <SubMenu
          key="sub1"
          title={<span><Icon type="user" /><span>User</span></span>}
        >
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub2"
          title={<span><Icon type="team" /><span>Team</span></span>}
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        */}

      </Menu>
    )
  }
}
