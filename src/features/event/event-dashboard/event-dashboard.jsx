import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../event-list/event-list';
import { deleteEvent } from '../event-list/event-actions';

class EventDashboard extends Component {
	handleDeleteEvent = id => {
		this.props.deleteEvent(id);
		this.setState({
			isOpen: false,
		});
	};

	render() {
		const { events } = this.props;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList events={events} onEventDelete={this.handleDeleteEvent} />
				</Grid.Column>
				<Grid.Column width={6} />
			</Grid>
		);
	}
}

const mapStateToProps = state => ({
	events: state.events,
});

const mapDispatchToProps = dispatch => ({
	deleteEvent: eventId => dispatch(deleteEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
