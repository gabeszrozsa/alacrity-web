import React from 'react'
import { message, Tabs, Icon } from 'antd';

import { EventService, AuthService } from '../../../api';
import { LoadingBar } from '../../../layout';
import EventDetailsPane from './EventDetailsPane';
import EventDetailsFooter from './EventDetailsFooter';
import EventDetailsAttendees from './EventDetailsAttendees';

const TabPane = Tabs.TabPane;

export default class EventDetailsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      isAttending: false,
      evt: null,
      attendees: []
    }
  }

  componentDidMount() {
    this.fetchEvent();
    this.fetchAttendees();
  }

  fetchEvent = () => {
    const id = this.props.match.params.id;
    EventService.getEvent(id)
      .then(evt => this.setState({ evt, isFetching: false }));
  }

  fetchAttendees = () => {
    const id = this.props.match.params.id;
    EventService.getAttendees(id).then(attendees => this.updateStateWithAttendees(attendees));
  }

  updateStateWithAttendees = (attendees) => {
    const currentUser = AuthService.currentUser()._id;
    const isAttending = attendees.find(attendee => currentUser === attendee._id);

    this.setState({ attendees, isAttending });
  }

//   handleUpdateActivity = (activity) => {
//     this.setState({ activity });
//   }

  handleDeleteEvent = () => {
    EventService.deleteEvent(this.state.evt._id)
      .then(res => {
        message.success('Esemény törölve!');
        this.props.history.push('/events');
      })
  }

  handleAttend = () => {
    const id = this.props.match.params.id;
    const currentUser = AuthService.currentUser()._id;

    if (this.state.isAttending) {
      const data = { attendee: currentUser };
      EventService.cancelEvent(id, data)
        .then(attendees => this.updateStateWithAttendees(attendees))
    } else {
      const data = { attendees: [currentUser] };
      EventService.inviteUsers(id, data)
        .then(attendees => this.updateStateWithAttendees(attendees))
    }
  }

  renderEvent() {
    const { isFetching, isAttending, evt, attendees } = this.state;

    let content;
    if (isFetching) {
      content = (<LoadingBar text="Esemény betöltése..."/>);
    } else {

      // TODO: empty text msg
      content = (
          <React.Fragment>
            <EventDetailsPane
                evt={evt}
                onDeleteEvent={this.handleDeleteEvent}
                onAttend={this.handleAttend}
                />

            <EventDetailsFooter 
              onAttend={this.handleAttend} 
              onDeleteEvent={this.handleDeleteEvent} 
              evt={evt}
              isAttending={isAttending}
              />

            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="team"/>Résztvevők ({attendees.length})</span>} key="1">
                    <EventDetailsAttendees attendees={attendees}/>
                </TabPane>
            </Tabs>
          </React.Fragment>
        )
    }
    return content;
  }

  render () {
    return this.renderEvent();
  }
}
