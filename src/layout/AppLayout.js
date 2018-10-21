import React from 'react';
import { Layout, Form } from 'antd';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { AppLayoutMenu, AppLayoutHeader, PrivateRoute } from './';
import { NewsFeed,
  EventList, AddEvent, EditEvent,
  Locations,
  Activities, ActivityTypes, Auth } from '../screens';


import AuthService from '../api/AuthService'


const { Content, Footer, Sider } = Layout;

export default class AppLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }


  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const AddActivityTypeForm = Form.create()(ActivityTypes.Add);
    const EditActivityTypeForm = Form.create()(ActivityTypes.Edit);

    const AddActivityForm = Form.create()(Activities.Add);
    const EditActivityForm = Form.create()(Activities.Edit);

    const AddEventForm = Form.create()(AddEvent);
    const EditEventForm = Form.create()(EditEvent);

    const AddLocationForm = Form.create()(Locations.Add);
    const EditLocationForm = Form.create()(Locations.Edit);

    const isLoggedIn = AuthService.isLoggedIn();

    return (
      <Router>

      <Layout style={{ minHeight: '100vh' }}>

        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <AppLayoutMenu/>
        </Sider>

        <Layout>
          <AppLayoutHeader/>
          <Content style={{ margin: '0 16px', paddingTop: '20px' }}>

            <Switch>
              <Route path="/login"  render={() => (
                isLoggedIn ? (<Redirect to="/"/>) : (<Auth/>)
              )} />
              <PrivateRoute exact path="/events" component={EventList} />
              <PrivateRoute exact path="/events/add" component={AddEventForm} />
              <PrivateRoute exact path="/events/edit/:id" component={EditEventForm} />
              <PrivateRoute exact path="/events/:id" component={EventList} />

              <PrivateRoute exact path="/locations" component={Locations.List} />
              <PrivateRoute exact path="/locations/add" component={AddLocationForm} />
              <PrivateRoute exact path="/locations/edit/:id" component={EditLocationForm} />
              <PrivateRoute exact path="/locations/:id" component={Locations.Details} />

              <PrivateRoute exact path="/activity" component={Activities.List} />
              <PrivateRoute exact path="/activity/add" component={AddActivityForm} />
              <PrivateRoute exact path="/activity/edit/:id" component={EditActivityForm} />
              <PrivateRoute exact path="/activity/:id" component={Activities.Details} />

              <PrivateRoute exact path="/activity-types" component={ActivityTypes.List} />
              <PrivateRoute exact path="/activity-types/add" component={AddActivityTypeForm} />
              <PrivateRoute exact path="/activity-types/edit/:id" component={EditActivityTypeForm} />
              <PrivateRoute exact path="/activity-types/:id" component={ActivityTypes.Details} />

              <PrivateRoute exact path="/" component={NewsFeed} />
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
