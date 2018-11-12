import React from 'react';
import { Layout } from 'antd';
import { Menu, Header } from './';

const { Content, Footer, Sider } = Layout;

const DashboardLayout = ({children, location, ...rest}) => {
  const path = children.props.location.pathname;
  
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sider>
        <div className="logo" />
        <Menu path={path}/>
      </Sider>

      <Layout>
        <Header/>
        <Content className='app-content'>
          {children}
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Alacrity ©2018 Created by Gabesz
        </Footer>

      </Layout>
    </Layout>
  )
}

export default DashboardLayout;
