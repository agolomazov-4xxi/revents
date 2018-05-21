import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateEvent, createEvent } from '../event-list/event-actions';

const emptyEvent = {
	title: '',
	date: '',
	city: '',
	venue: '',
	hostedBy: '',
};

class EventForm extends Component {
	state = {
		event: emptyEvent,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.event) {
			return {
				event: {
					...nextProps.event,
				},
			};
		}
		return null;
	}

	onChange = event => {
		const state = { ...this.state };
		state.event[event.target.name] = event.target.value;
		this.setState({
			...state,
		});
	};

	onSubmit = event => {
		event.preventDefault();
		const eventData = {
			...this.state.event,
		};
		if (!eventData.id) {
			eventData.id = cuid();
			eventData.hostPhotoURL = '/assets/user.png';
			eventData.category = 'culture';
			eventData.description = '';
			eventData.attendees = [];
			this.props.onCreate(eventData);
			this.props.history.push(`/event/${eventData.id}`);
		} else {
			this.props.onUpdate(eventData);
			this.props.history.goBack();
		}
	};

	render() {
		const { event } = this.state;
		return (
			<Segment>
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<label>Event Title</label>
						<input placeholder="Event title" name="title" value={event.title} onChange={this.onChange} />
					</Form.Field>
					<Form.Field>
						<label>Event Date</label>
						<input
							type="date"
							placeholder="Event Date"
							name="date"
							value={event.date}
							onChange={this.onChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>City</label>
						<input
							placeholder="City event is taking place"
							name="city"
							value={event.city}
							onChange={this.onChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>Venue</label>
						<input
							placeholder="Enter the Venue of the event"
							value={event.venue}
							name="venue"
							onChange={this.onChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>Hosted By</label>
						<input
							placeholder="Enter the name of person hosting"
							name="hostedBy"
							value={event.hostedBy}
							onChange={this.onChange}
						/>
					</Form.Field>
					<Button positive type="submit">
						Submit
					</Button>
					<Button type="button" onClick={() => this.props.history.goBack()}>
						Cancel
					</Button>
				</Form>
			</Segment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const eventId = ownProps.match.params.id;

	let event = {
		title: '',
		date: '',
		city: '',
		venue: '',
		hostedBy: '',
	};

	if (eventId && state.events.length > 0) {
		event = state.events.find(event => event.id === eventId);
	}

	return {
		event,
	};
};

const mapDispatchToProps = dispatch => ({
	onUpdate: event => dispatch(updateEvent(event)),
	onCreate: event => dispatch(createEvent(event)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
