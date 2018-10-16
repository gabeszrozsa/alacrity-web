import React, { Component } from 'react';
import Login from './Login';
import { Row, Col, Form } from 'antd';

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
