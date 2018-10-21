import React from 'react'

import { ActivityService } from '../../api';
import { LoadingBar } from '../../layout';

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

  renderActivity() {
    let content;
    if (this.state.isFetching) {
      content = (<LoadingBar text="Tevékenység betöltése..."/>);
    } else {
      // TODO: empty text msg
      content =
        <p key={this.state.activity._id}>
          {this.state.activity.name}
        </p>;
    }
    return content;
  }

  render () {
    const Activity = this.renderActivity();

    return (Activity);
  }
}
