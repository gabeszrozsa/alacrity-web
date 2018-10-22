import React from 'react';
import { List, Avatar, Icon } from 'antd';

import ActivityDetailsFooter from './ActivityDetailsFooter';
import { formatDistance, formatDuration, formatDate } from '../utils';
import running from './icon_running.png';

const ActivityDetailsPane = (props) => {
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={[props.activity]}
      footer={<ActivityDetailsFooter {...props}/>}
      renderItem={item => (
        <List.Item
          key={item._id}
          actions={[
            <IconText type="rise" text={formatDistance(item.distanceInMeters)} />,
            <IconText type="dashboard" text={formatDuration(item.durationInSeconds)} />
          ]}
          extra={<img width={272} alt="logo" src="http://ntmresizer.azureedge.net/sized/358/284/media.iceportal.com/27286/photos/4760351_XL.jpg" />}
        >
          <List.Item.Meta
            avatar={<Avatar src={running} />}
            title={item.activityType.name}
            description={formatDate(item.date)}
          />
        {item.location.name}
        </List.Item>
      )}
    />
  )
}

export default ActivityDetailsPane;
