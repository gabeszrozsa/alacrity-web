import React from 'react'
import { Icon, Tabs, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom'

import ActivityDetailsComments from './ActivityDetailsComments';

const TabPane = Tabs.TabPane;
const ActivityDetailsFooter = (props) => {
  return (
    <React.Fragment>
      <Link to={"/activity/edit/" + props.activity._id}>
        <Button className='add-button' ghost type="primary" icon="edit">
          Szerkesztés
        </Button>
      </Link>
      <Popconfirm title="Biztos, hogy törölni szeretnéd?" onConfirm={props.onDeleteActivity} okText="Igen" cancelText="Nem">
        <Button className='add-button' ghost type="danger" icon="delete">
          Törlés
        </Button>
      </Popconfirm>,

      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><Icon type="message"/>Hozzászólások ({props.activity.comments.length})</span>} key="1">
          <ActivityDetailsComments {...props}/>
        </TabPane>
        <TabPane tab={<span><Icon type="like"/>Kedvelések ({props.activity.likes.length})</span>} key="2">

        </TabPane>
      </Tabs>
  </React.Fragment>
  )
}

export default ActivityDetailsFooter;
