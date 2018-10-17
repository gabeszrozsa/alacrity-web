import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

// TODO: placeholder IMG
const LocationThumbnail = (props) => {
  return (
    <Card hoverable style={{ width: 240 }}
      cover={<img alt="example" src="http://ntmresizer.azureedge.net/sized/358/284/media.iceportal.com/27286/photos/4760351_XL.jpg" />}
    >
      <Meta
        title={props.loc.name}
        description={props.loc.coordinates}
      />
    </Card>
  )
}

export default LocationThumbnail;
