import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'

import { LocationService } from '../../api';
import { LoadingBar } from '../../layout';
import LocationThumbnail from './LocationThumbnail';

export default class LocationList extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      locations: []
    }
  }

  componentDidMount() {
    LocationService.getAllLocations().then(locations => this.setState({
      isFetching: false,
      locations: locations
    }));
  }

  renderLocations() {
    let content;
    if (this.state.isFetching) {
      content = (<LoadingBar text="Helyszínek betöltése..."/>);
    } else {

      // TODO: empty text msg
      content = this.state.locations.map(loc => (
          <LocationThumbnail key={loc._id} loc={loc}/>
      ));
    }
    return content;
  }

  render () {
    const Locations = this.renderLocations();

    // TODO: layout!!

    return (
      <React.Fragment>
        <Link to="/locations/add">
          <Button className='add-button' type="primary" icon="pushpin" size='large'>
            Helyszín hozzáadása
          </Button>
        </Link>

        { Locations }

      </React.Fragment>
    )
  }
}
