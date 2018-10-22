import React from 'react'
import { message } from 'antd';

import { ActivityService } from '../../../api';
import { LoadingBar } from '../../../layout';
import ActivityDetailsPane from './ActivityDetailsPane';

export default class ActivityDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      activity: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    ActivityService.getActivity(id).then(activity => this.setState({
      isFetching: false,
      activity: activity
    }));
  }

  onDeleteActivity = () => {
    ActivityService.deleteActivity(this.state.activity._id)
      .then(res => {
        message.success('Tevékenység törölve!');
        this.props.history.push('/activity');
      })
  }

  renderActivity() {
    let content;
    if (this.state.isFetching) {
      content = (<LoadingBar text="Tevékenység betöltése..."/>);
    } else {
      // TODO: empty text msg
      content = <ActivityDetailsPane activity={this.state.activity} onDeleteActivity={this.onDeleteActivity}/>
    }
    return content;
  }

  render () {
    const Activity = this.renderActivity();
    return (Activity);
  }
}
