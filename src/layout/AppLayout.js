import React, { Component } from 'react';
import { Form } from 'antd';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import DashboardLayout from './dashboard/DashboardLayout';
// import AuthLayout from './auth/AuthLayout';
import AuthService from './../api/AuthService';

import { NewsFeed, Messages,
  EventList, AddEvent, EditEvent, EventDetailsContainer,
  Locations,
  Activities, ActivityTypes, Auth } from '../screens';

const AuthLayout = ({children, ...rest}) => {
  return (
    <div className="page page-login">
      <div className="main">{children}</div>
    </div>
  )
}


const DashboardRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <DashboardLayout>
          <Component {...matchProps} />
      </DashboardLayout>
    )} />
  )
};

const AuthRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <AuthLayout>
          <Component {...matchProps} />
      </AuthLayout>
    )} />
  )
};
export default class AppLayout extends Component {
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
    const RedirectTo = (isLoggedIn) ? <Redirect to="/news" /> : <Redirect to="/login" />

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            { RedirectTo }
          </Route>

          <AuthRoute exact path="/login" component={Auth}/>

          <DashboardRoute exact path="/events" component={EventList} />
          <DashboardRoute exact path="/events/add" component={AddEventForm} />
          <DashboardRoute exact path="/events/edit/:id" component={EditEventForm} />
          <DashboardRoute exact path="/events/:id" component={EventDetailsContainer} />

          <DashboardRoute exact path="/locations" component={Locations.List} />
          <DashboardRoute exact path="/locations/add" component={AddLocationForm} />
          <DashboardRoute exact path="/locations/edit/:id" component={EditLocationForm} />
          <DashboardRoute exact path="/locations/:id" component={Locations.Details} />

          <DashboardRoute exact path="/activity" component={Activities.List} />
          <DashboardRoute exact path="/activity/add" component={AddActivityForm} />
          <DashboardRoute exact path="/activity/edit/:id" component={EditActivityForm} />
          <DashboardRoute exact path="/activity/:id" component={Activities.Details} />

          <DashboardRoute exact path="/activity-types" component={ActivityTypes.List} />
          <DashboardRoute exact path="/activity-types/add" component={AddActivityTypeForm} />
          <DashboardRoute exact path="/activity-types/edit/:id" component={EditActivityTypeForm} />
          <DashboardRoute exact path="/activity-types/:id" component={ActivityTypes.Details} />

          <DashboardRoute exact path="/news" component={NewsFeed} />
          <DashboardRoute exact path="/messages" component={Messages} />
        </Switch>
      </Router>
    );
  }

}
