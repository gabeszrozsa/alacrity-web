import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'

import { ActivityTypeService } from '../../api';
import { LoadingBar } from '../../layout';

export default class ActivityTypeList extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      activityTypes: []
    }
  }

  componentDidMount() {
    ActivityTypeService.getAllActivityTypes().then(activityTypes => this.setState({
      isFetching: false,
      activityTypes: activityTypes
    }));
  }

  renderActivityTypes() {
    let content;
    if (this.state.isFetching) {
      content = (<LoadingBar text="Sportágak betöltése..."/>);
    } else {

      // TODO: empty text msg
      content = this.state.activityTypes.map(activityType => (
        <Link key={activityType._id} to={'/activity-types/' + activityType._id}>
          <p>{activityType.name}</p>
        </Link>
      ));
    }
    return content;
  }

  render () {
    const ActivityTypes = this.renderActivityTypes();

    // TODO: layout!!

    return (
      <React.Fragment>
        <Link to="/activity-types/add">
          <Button className='add-button' type="primary" icon="crown" size='large'>
            Sportág rögzítése
          </Button>
        </Link>

        { ActivityTypes }

      </React.Fragment>
    )
  }
}
