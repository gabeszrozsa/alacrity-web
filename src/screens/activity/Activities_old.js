import React from 'react';
import { Card, Row, Col, Button, Progress } from 'antd';
import { Link } from 'react-router-dom'

export default class Activities extends React.Component {
  render () {
    const buttonStyle = {
      marginRight: '10px',
      marginBottom: '40px'
    };

    return (
      <React.Fragment>

        <Link to="/activity/add">
         <Button style={buttonStyle} type="primary" icon="plus" size='large'>
             Tevékenység rögzítése
         </Button>
       </Link>
       <Link to="/activity/add-type">
         <Button style={buttonStyle} type="primary" icon="crown" size='large'>
             Sportág rögzítése
         </Button>
       </Link>

        <h1>Legutóbbi sporttevékenységek</h1>

          <Row gutter={16} justify='space-around' type='flex'>
            <Col span={4}>
              <Card title="Card title" extra={<a href="/event">More</a>}>
                <p>
                  Card content
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="Card title" extra={<a href="/event">More</a>}>
                <p>
                  Card content
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="Card title" extra={<a href="/event">More</a>}>
                <p>
                  Card content
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="Card title" extra={<a href="/event">More</a>}>
                <p>
                  Card content
                </p>
              </Card>
            </Col>
            <Col span={4}>
              <Card title="Card title" extra={<a href="/event">More</a>}>
                <p>
                  Card content
                </p>
              </Card>
            </Col>
          </Row>

        <h1>Statisztika</h1>
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
