import React from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;

// TODO: placeholder IMG
const EventThumbnail = (props) => {
  return (
    <Card style={{ width: 240 }}
      actions={[
        <Link to={'/events/' + props.ev._id}><Icon type="eye" /></Link>,
        <Link to={'/events/edit/' + props.ev._id}><Icon type="edit" /></Link>,
        <Icon type="delete" />
      ]}
    >
      <Meta
        title={props.ev.name}
        description={props.ev.date}
      />
    </Card>
  )
}

export default EventThumbnail;
