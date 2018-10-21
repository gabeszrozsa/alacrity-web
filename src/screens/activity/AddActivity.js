import React from 'react'
import { Divider, Icon, message } from 'antd';
import { ActivityService, ActivityTypeService, LocationService } from '../../api';
import { LoadingBar } from '../../layout';
import ActivityForm from './ActivityForm';

export default class AddActivity extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      locations: [],
      activityTypes: []
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        ActivityService.addNewActivity(values).then(id => {
          const redirectUrl = `/activity/${id}`;
          message.info('Tevékenység hozzáadva!');
          this.props.history.push(redirectUrl);
        });
      }
    });
  }

  componentDidMount() {
    Promise.all([
      this.fetchActivityTypes(),
      this.fetchLocations()
    ]).then(res => this.setState({ isFetching: false }))
  }

  fetchLocations = () => {
    LocationService.getAllLocations().then(locations => {
      this.setState({
        locations: locations
      });
    });
  }

  fetchActivityTypes = () => {
    ActivityTypeService.getAllActivityTypes().then(activityTypes => {
      this.setState({ activityTypes: activityTypes });
    });
  }

  render() {
    if (this.state.isFetching) {
      return (<LoadingBar text="Tevékenység betöltése..."/>);
    } else {
      return (
        <React.Fragment>
          <Divider>
            <Icon type="crown" theme="outlined" style={{marginRight: '5px'}}/>
            Tevékenység rögzítése
          </Divider>

          <ActivityForm
            form={this.props.form}
            handleSubmit={this.handleSubmit}
            buttonText={'Hozzáadás'}
            activityTypes={this.state.activityTypes}
            locations={this.state.locations}
          />

        </React.Fragment>
      );
    }
  }
}
