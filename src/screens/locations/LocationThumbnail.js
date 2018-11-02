import React from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;

// TODO: placeholder IMG
const LocationThumbnail = (props) => {
  return (
    <Card style={{ width: 240 }}
      cover={<img alt="example" src="http://ntmresizer.azureedge.net/sized/358/284/media.iceportal.com/27286/photos/4760351_XL.jpg" />}
      actions={[
        <Link to={'/locations/' + props.loc._id}><Icon type="eye" /></Link>,
        <Link to={'/locations/edit/' + props.loc._id}><Icon type="edit" /></Link>,
        <Icon type="delete" />
      ]}
    >
      <Meta
        title={props.loc.name}
      />
    </Card>
  )
}

export default LocationThumbnail;
