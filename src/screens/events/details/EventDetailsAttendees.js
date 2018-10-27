import React from 'react'
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const EventDetailsAttendees = (props) => {
  return props.attendees.map(attendee => {
    return (
      <Card key={attendee._id} style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={attendee.displayName}
        />
      </Card>
    )
  })
}
 export default EventDetailsAttendees;
