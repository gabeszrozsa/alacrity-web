import React from 'react'
import { Divider, Icon, message } from 'antd';

import { LoadingBar } from '../../layout';
import { ActivityService } from '../../api';
import ActivityForm from './ActivityForm';

export default class EditActivity extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      activity: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    ActivityService.getActivity(id).then(activity => {
        this.setState({
          isFetching: false,
          activity: activity
        });

        this.props.form.setFieldsValue({ name: activity.name })
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.form.validateFieldsAndScroll((err, data) => {
      if (!err) {
        ActivityService.updateActivity(id, data)
          .then(result => {
            const redirectUrl = `/activity/${id}`;
            message.success('Tevékenység frissítve!');
            this.props.history.push(redirectUrl);
          });
      }
    });
  }

  render() {
    if (this.state.isFetching) {
      return (<LoadingBar text="Tevékenység betöltése..."/>);
    } else {
      return (
        <React.Fragment>
          <Divider>
            <Icon type="crown" theme="outlined" style={{marginRight: '5px'}}/>
            Tevékenység szerkesztése
          </Divider>

          <ActivityForm
            form={this.props.form}
            handleSubmit={this.handleSubmit}
            buttonText={'Mentés'}
          />

        </React.Fragment>
      );
    }
  }
}
