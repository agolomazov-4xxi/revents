import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';

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
		if (nextProps.selectedEvent) {
			return {
				event: {
					...nextProps.selectedEvent,
				},
			};
		}
		if (!nextProps.selectedEvent) {
			return {
				event: {
					...emptyEvent,
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
		if (!this.props.selectedEvent) {
			eventData.id = cuid();
			eventData.hostPhotoURL = '/assets/user.png';
			eventData.category = 'culture';
			eventData.description = '';
			eventData.attendees = [];
		}
		this.setState({
			event: emptyEvent,
		});
		this.forceUpdate();
		setTimeout(() => {
			this.props.onSubmitForm(eventData);
		}, 20);
	};

	render() {
		const { handleCancel } = this.props;
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
					<Button type="button" onClick={handleCancel}>
						Cancel
					</Button>
				</Form>
			</Segment>
		);
	}
}

export default EventForm;
