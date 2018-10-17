import React from 'react'
import { Form, Input, Button, Divider, Icon } from 'antd';
import { LocationService } from '../../api';

const FormItem = Form.Item;

export default class AddLocation extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        LocationService.addNewLocation(values).then(id => console.log(id));
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
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your név!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem {...formItemLayout} label={'Koordináták'}>
            {getFieldDecorator('coordinates', {
              rules: [{ required: true, message: 'Please input your Koordináták!', whitespace: true }],
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
