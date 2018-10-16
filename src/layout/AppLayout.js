import React from 'react';
import { Layout, Form } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AppLayoutMenu from './AppLayoutMenu';
import PrivateRoute from './PrivateRoute';
import NewsFeed from '../screens/news/NewsFeed';
import Events from '../screens/events/Events';
import AddEvent from '../screens/events/AddEvent';
import Locations from '../screens/locations/Locations';
import AddLocation from '../screens/locations/AddLocation';
import Activities from '../screens/activities/Activities';
import AddActivityType from '../screens/activities/AddActivityType';
import Auth from '../screens/auth/Auth';


import prof from './prag_prof.jpg';

const { Header, Content, Footer, Sider } = Layout;

const headerTextStyle = {
  textAlign: 'right'
};

const profStyle = {
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  marginRight: '30px',
  marginLeft: '10px',
};

export default class AppLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    const AddActivityTypeForm = Form.create()(AddActivityType);
    const AddEventForm = Form.create()(AddEvent);
    const AddLocationForm = Form.create()(AddLocation);

    return (
      <Router>

      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>

          <div className="logo" />

          <AppLayoutMenu/>

        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
              <h2 style={headerTextStyle}>
                Rózsa Gábor
                <img
                  style={profStyle}
                  src={prof}
                  alt='profilkép'/>
            </h2>
          </Header>
          <Content style={{ margin: '0 16px', paddingTop: '20px' }}>

            <Switch>
              <Route path="/login" component={Auth} />
              <PrivateRoute path="/" component={NewsFeed} />
              <PrivateRoute path="/events" component={Events} />
              <PrivateRoute path="/events/add" component={AddEventForm} />
              <PrivateRoute path="/locations" component={Locations} />
              <PrivateRoute path="/locations/add" component={AddLocationForm} />
              <PrivateRoute path="/activities" component={Activities} />
              <PrivateRoute path="/activities/add" component={AddActivityTypeForm} />
              <PrivateRoute path="/activities/add-type" component={AddActivityTypeForm} />
            </Switch>

          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Astro ©2018 Created by Gabesz
          </Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}
