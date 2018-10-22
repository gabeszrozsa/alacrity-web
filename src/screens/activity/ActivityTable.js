import React from 'react';
import moment from 'moment';
import { Table, Divider, Tag } from 'antd';

const { Column } = Table;

export default class ActivityTable extends React.Component {
  render() {
    return (
      <Table dataSource={this.props.data} rowKey={record => record._id}>
        <Column
          title="Időpont"
          dataIndex="date"
          key="date"
          render={date => moment(date).format('YYYY-MM-DD')}
        />
        <Column
          title="Sportág"
          dataIndex="activityType"
          key="activityType"
          render={activityType => activityType.name}
        />
        <Column
          title="Helyszín"
          dataIndex="location"
          key="location"
          render={evt => evt.name}
        />
        <Column
          title="Időtartam (másodperc)"
          dataIndex="durationInSeconds"
          key="durationInSeconds"
        />
        <Column
          title="Távolság (méter)"
          dataIndex="distanceInMeters"
          key="distanceInMeters"
        />
      </Table>
    )
  }
}
