import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'

import { EventService } from '../../api';
import { LoadingBar } from '../../layout';
import EventThumbnail from './EventThumbnail';

export default class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      events: []
    }
  }

  componentDidMount() {
    EventService.getAllEvents().then(events => this.setState({
      isFetching: false,
      events: events
    }));
  }

  renderEvents() {
    let content;
    if (this.state.isFetching) {
      content = (<LoadingBar text="Helyszínek betöltése..."/>);
    } else {

      // TODO: empty text msg
      content = this.state.events.map(ev => (
          <EventThumbnail key={ev._id} ev={ev}/>
      ));
    }
    return content;
  }

  render () {
    const Events = this.renderEvents();

    // TODO: layout!!
    //
    return (
      <React.Fragment>
        <Link to="/events/add">
          <Button className='add-button' type="primary" icon="schedule" size='large'>
            Esemény szervezése
          </Button>
        </Link>

        { Events }


      </React.Fragment>
    )
  }
}
