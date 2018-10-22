import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'

import { ActivityService } from '../../api';
import { LoadingBar } from '../../layout';
import ActivityThumbnail from './ActivityThumbnail';
import ActivityTable from './ActivityTable';

export default class ActivityList extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      activities: []
    }
  }

  componentDidMount() {
    ActivityService.getAllActivities().then(activities => this.setState({
      isFetching: false,
      activities: activities
    }));
  }

  renderActivities() {
    let content;
    if (this.state.isFetching) {
      content = (<LoadingBar text="Tevékenységek betöltése..."/>);
    } else {

      // TODO: empty text msg
      content = <ActivityTable data={this.state.activities}/>;
    }
    return content;
  }

  render () {
    const Activities = this.renderActivities();

    // TODO: layout!!

    return (
      <React.Fragment>
        <Link to="/activity/add">
          <Button className='add-button' type="primary" icon="crown" size='large'>
            Tevékenység rögzítése
          </Button>
        </Link>

        { Activities }

      </React.Fragment>
    )
  }
}
