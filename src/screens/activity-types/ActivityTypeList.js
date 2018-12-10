import React from 'react'
import { Button, Card, Icon, Col, Row } from 'antd';
import { Link } from 'react-router-dom'

import { ActivityTypeService } from '../../api';
import { LoadingBar } from '../../components';

import './activity-type-thumbnail.css';
const { Meta } = Card;

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
        <Card key={activityType._id} className="activity-type-thumbnail"
          actions={[
            <Link to={'/activity-types/edit/' + activityType._id}><Icon type="edit" /> Szerkesztés</Link>,
            <span style={{color: '#f5222d'}}><Icon type="delete" /> Törlés</span>,
          ]}
        >
          <Meta
            title={activityType.name}
          />
        </Card>
      ));
    }
    return content;
  }

  render () {
    const ActivityTypes = this.renderActivityTypes();

    // TODO: layout!!

    return (
      <React.Fragment>
        <Row>
          <Col span={24}>
            <Link to="/activity-types/add">
              <Button className='add-button' type="primary" icon="crown" size='large'>
                Sportág rögzítése
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            { ActivityTypes }
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
