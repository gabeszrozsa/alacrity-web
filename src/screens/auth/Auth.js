import React, { Component } from 'react';
import { Row, Col, Form } from 'antd';
import Login from './Login';

export default class Auth extends Component {
  render() {
    const WrappedNormalLoginForm = Form.create()(Login);

    return (
      <Row>
        <Col span={8} offset={8}>
          <WrappedNormalLoginForm/>
        </Col>
      </Row>
    );
  }
}
