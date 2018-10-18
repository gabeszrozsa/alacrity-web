import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;

// TODO: placeholder IMG
const LocationThumbnail = (props) => {
  return (
    <Card style={{ width: 240 }}
      cover={<img alt="example" src="http://ntmresizer.azureedge.net/sized/358/284/media.iceportal.com/27286/photos/4760351_XL.jpg" />}
    >
      <Meta
        title={props.loc.name }
        description={<Link to={'/locations/edit/' + props.loc._id}>Edit</Link>}
      />
    </Card>
  )
}

export default LocationThumbnail;
