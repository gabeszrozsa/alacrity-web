import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import Auth from '../../api/AuthService';
import { Redirect, Link } from 'react-router-dom'

const FormItem = Form.Item;

class Register extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Auth.register(values).then(() => this.props.history.push('/news'));
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row>
        <Col span={8} offset={8}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Kérlek add meg az e-mail címedet!' }],
              })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('displayName', {
                rules: [{ required: true, message: 'Kérlek adj meg egy nevet!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Név" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Kérlek add meg a jelszavadat!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Jelszó" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Regisztráció
              </Button>
              <Link to="/login">
                Belépés meglévő felhasználóval
              </Link>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalRegisterForm = Form.create()(Register);
export default WrappedNormalRegisterForm;
