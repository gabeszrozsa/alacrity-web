import React from 'react'
import { Form, Input, Button, Divider, Icon } from 'antd';
import { LoadingBar } from '../../layout';
import { LocationService } from '../../api';

const FormItem = Form.Item;

export default class EditLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      loc: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    LocationService.getLocation(id).then(loc => {
        this.setState({
          isFetching: false,
          loc: loc
        });

        this.props.form.setFieldsValue({
          name: loc.name,
          coordinates: loc.coordinates
        })
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.form.validateFieldsAndScroll((err, data) => {
      if (!err) {
        LocationService.updateLocation(id, data).then(result => console.log(result));
      }
    });
  }

  render() {
    if (this.state.isFetching) {
      return (<LoadingBar text="Fetching location..."/>);
    } else {
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
            Helyszín szerkesztése
          </Divider>
          <Form onSubmit={this.handleSubmit}>

            <FormItem {...formItemLayout} label={'Név'}>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your név!', whitespace: true }],
              })(
                <Input/>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={'Koordináták'}>
              {getFieldDecorator('coordinates', {
                rules: [{ message: 'Please input your Koordináták!', whitespace: true }],
              })(
                <Input/>
              )}
            </FormItem>

            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">Mentés</Button>
            </FormItem>
          </Form>
        </React.Fragment>
      );
    }
  }
}
