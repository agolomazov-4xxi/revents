import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../event-list/event-list';
import EventForm from '../event-form/event-form';
import { createEvent, updateEvent, deleteEvent } from '../event-list/event-actions';

class EventDashboard extends Component {
	state = {
		isOpen: false,
		selectedEvent: null,
	};

	handleFormSwitch = () => {
		this.setState({
			isOpen: !this.state.isOpen,
			selectedEvent: null,
		});
	};

	createEvent = data => {
		this.props.createEvent(data);
		this.setState({
			selectedEvent: null,
			isOpen: false,
		});
	};

	updateEvent = event => {
		this.props.updateEvent(event);
		this.setState({
			isOpen: false,
			selectedEvent: null,
		});
	};

	onSubmitForm = data => {
		const { selectedEvent } = this.state;
		if (!selectedEvent) {
			return this.createEvent(data);
		}
		return this.updateEvent(data);
	};

	handleEditEvent = eventToUpdate => {
		this.setState({
			selectedEvent: eventToUpdate,
			isOpen: true,
		});
	};

	handleDeleteEvent = id => {
		this.props.deleteEvent(id);
		this.setState({
			selectedEvent: null,
			isOpen: false,
		});
	};

	render() {
		const { isOpen, selectedEvent } = this.state;
		const { events } = this.props;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList
						events={events}
						onEventEdit={this.handleEditEvent}
						onEventDelete={this.handleDeleteEvent}
					/>
				</Grid.Column>
				<Grid.Column width={6}>
					{!isOpen && <Button positive content="Create Event" onClick={this.handleFormSwitch} />}
					{isOpen && (
						<EventForm
							selectedEvent={selectedEvent}
							handleCancel={this.handleFormSwitch}
							onSubmitForm={eventData => this.onSubmitForm(eventData)}
						/>
					)}
				</Grid.Column>
			</Grid>
		);
	}
}

const mapStateToProps = state => ({
	events: state.events,
});

const mapDispatchToProps = dispatch => ({
	createEvent: event => dispatch(createEvent(event)),
	updateEvent: event => dispatch(updateEvent(event)),
	deleteEvent: eventId => dispatch(deleteEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
