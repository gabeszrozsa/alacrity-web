import React from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { formatFullDate } from './../../utils/';

import './event-thumbnail.css';
const { Meta } = Card;

// TODO: placeholder IMG
const EventThumbnail = (props) => {
  return (
    <Card className="event-thumbnail"
      actions={[
        <Link to={'/events/' + props.ev._id}><Icon type="eye" /> Részletek</Link>,
        <Link to={'/events/edit/' + props.ev._id}><Icon type="edit" /> Szerkesztés</Link>,
        <span><Icon type="team" /> {props.ev.attendees.length} résztvevő</span>,
      ]}
    >
      <Meta
        title={props.ev.name}
        description={formatFullDate(props.ev.date)}
      />
    </Card>
  )
}

export default EventThumbnail;
