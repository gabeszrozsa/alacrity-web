import React from 'react';
import { List, Avatar } from 'antd';
import { formatFullDate } from './../../utils/';

const Title = ({ name, date }) => (
  <React.Fragment>
    {name}
    <span className="message-date">{formatFullDate(date)}</span>
  </React.Fragment>
)

const MessageList = ({ messages }) => (
  <List
    itemLayout="horizontal"
    dataSource={messages}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<Title name={item.partner.displayName} date={item.createdAt} />}
          description={item.text}
        />
      </List.Item>
    )}
  />
);

export default MessageList;
