import React from 'react'
import { Divider, Icon, message } from 'antd';
import { LocationService } from '../../api';
import LocationForm from './LocationForm';

export default class AddLocation extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        LocationService.addNewLocation(values).then(id => {
          const redirectUrl = `/locations/${id}`;
          message.info('Helyszín hozzáadva!');
          this.props.history.push(redirectUrl);
        });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Divider>
          <Icon type="pushpin" theme="outlined" style={{marginRight: '5px'}}/>
          Helyszín hozzáadása
        </Divider>

        <LocationForm
          form={this.props.form}
          handleSubmit={this.handleSubmit}
          buttonText={'Hozzáadás'}
        />

      </React.Fragment>
    );
  }
}
