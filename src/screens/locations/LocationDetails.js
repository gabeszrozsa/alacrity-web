import React from 'react'

import { LocationService } from '../../api';
import { LoadingBar } from '../../layout';
import LocationThumbnail from './LocationThumbnail';

export default class LocationDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      loc: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    LocationService.getLocation(id).then(loc => this.setState({
      isFetching: false,
      loc: loc
    }));
  }

  renderLocation() {
    let content;
    if (this.state.isFetching) {
      content = (<LoadingBar text="Fetching location..."/>);
    } else {
      // TODO: empty text msg
      content = (<LocationThumbnail loc={this.state.loc}/>);
    }
    return content;
  }

  render () {
    const Loc = this.renderLocation();

    return (Loc);
  }
}
