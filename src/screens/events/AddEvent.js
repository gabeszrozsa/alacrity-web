import React from 'react'
import { Form, Input, Button, Divider, Select, DatePicker, Icon } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

export default class AddEvent extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        };
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
          <Icon type="schedule" theme="outlined" style={{marginRight: '5px'}}/>
          Esemény szervezése
        </Divider>
        <Form onSubmit={this.handleSubmit}>

          <FormItem {...formItemLayout} label='Az esemény megnevezése'>
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem {...formItemLayout} label='Helyszín' hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            })(
              <Select placeholder="Válassz egy helyszínt!">
                <Option value="x">Margit-sziget</Option>
                <Option value="x">Feneketlen-tó</Option>
                <Option value="x">Dunapart</Option>
              </Select>
            )}
          </FormItem>

          <FormItem {...formItemLayout} label='Időpont'
          >
            {getFieldDecorator('date-time-picker', {
              rules: [{ type: 'object', required: true, message: 'Please select time!' }]
            })(
              <DatePicker placeholder="Válassz időpontot!" showTime format="YYYY-MM-DD HH:mm:ss" />
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Létrehozás</Button>
          </FormItem>
        </Form>
      </React.Fragment>
    );
  }
}
