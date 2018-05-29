import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import EventList from '../event-list/event-list';
import {deleteEvent} from '../event-actions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../event-activity/event-activity';

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const {events, loading} = this.props;
    if (loading) {
      return <LoadingComponent inverted={true} />;
    }
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} onEventDelete={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading,
});

const mapDispatchToProps = dispatch => ({
  deleteEvent: eventId => dispatch(deleteEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  firestoreConnect([{collection: 'events'}])(EventDashboard)
);
