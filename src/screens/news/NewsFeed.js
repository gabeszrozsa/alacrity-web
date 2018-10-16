import React from 'react';
import { Card, Row, Col, Progress, Avatar, Icon } from 'antd';
// import { Link } from 'react-router-dom'

const { Meta } = Card;

export default class NewsFeed extends React.Component {
  render () {
    // const buttonStyle = {
    //   marginRight: '10px',
    //   marginBottom: '40px'
    // };

    return (
      <React.Fragment>
        <h1>Legfrissebb hírek</h1>

          <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[<Icon type="like" />, <Icon type="message" />]}
            >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[<Icon type="like" />, <Icon type="message" />]}
            >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[<Icon type="like" />, <Icon type="message" />]}
            >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>

        <h1>Közelgő események</h1>
          <Row gutter={16} justify='start' type='flex'>
            <Col span={4}>
              <Progress type="circle" percent={75} />
            </Col>
            <Col span={4}>
              <Progress type="circle" percent={70} status="exception" />
            </Col>
            <Col span={4}>
              <Progress type="circle" percent={100} />
            </Col>
          </Row>
      </React.Fragment>
    )
  }
}
