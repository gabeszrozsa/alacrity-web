import React from 'react'
import { Form, Input, Button, Divider, Icon } from 'antd';

const FormItem = Form.Item;

export default class AddLocation extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <React.Fragment>
        <Divider>
          <Icon type="pushpin" theme="outlined" style={{marginRight: '5px'}}/>
          Helyszín hozzáadása
        </Divider>
        <Form onSubmit={this.handleSubmit}>

          <FormItem {...formItemLayout} label={'Név'}>
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem {...formItemLayout} label={'Koordináták'}>
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Hozzáadás</Button>
          </FormItem>
        </Form>
      </React.Fragment>
    );
  }
}
