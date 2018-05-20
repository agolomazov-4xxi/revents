import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../event-list/event-list';
import EventForm from '../event-form/event-form';

const eventsDashboard = [
	{
		id: '1',
		title: 'Trip to Tower of London',
		date: '2018-03-27',
		category: 'culture',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
		city: 'London, UK',
		venue: "Tower of London, St Katharine's & Wapping, London",
		hostedBy: 'Bob',
		hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
		attendees: [
			{
				id: 'a',
				name: 'Bob',
				photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
			},
			{
				id: 'b',
				name: 'Tom',
				photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
			},
		],
	},
	{
		id: '2',
		title: 'Trip to Punch and Judy Pub',
		date: '2018-03-28',
		category: 'drinks',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
		city: 'London, UK',
		venue: 'Punch & Judy, Henrietta Street, London, UK',
		hostedBy: 'Tom',
		hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
		attendees: [
			{
				id: 'b',
				name: 'Tom',
				photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
			},
			{
				id: 'a',
				name: 'Bob',
				photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
			},
		],
	},
];

class EventDashboard extends Component {
	state = {
		events: eventsDashboard,
		isOpen: false,
		selectedEvent: null,
	};

	handleFormSwitch = () => {
		this.setState({
			isOpen: !this.state.isOpen,
			selectedEvent: null,
		});
	};

	createEvent = (events, data) => {
		const newEvents = [data, ...events];
		this.setState({
			events: newEvents,
			isOpen: false,
		});
	};

	updateEvent = (events, data) => {
		const newEvents = events.map(item => {
			if (item.id === data.id) {
				return data;
			}
			return item;
		});
		this.setState({
			events: newEvents,
			isOpen: false,
			selectedEvent: null,
		});
	};

	onSubmitForm = data => {
		const { events } = this.state;
		if (!this.state.selectedEvent) {
			return this.createEvent(events, data);
		}
		return this.updateEvent(events, data);
	};

	handleEditEvent = eventToUpdate => {
		this.setState({
			selectedEvent: eventToUpdate,
			isOpen: true,
		});
	};

	handleDeleteEvent = id => {
		const { events } = this.state;
		const filteredEvents = events.filter(event => event.id !== id);
		this.setState({
			selectedEvent: null,
			isOpen: false,
			events: filteredEvents,
		});
	};

	render() {
		const { events, isOpen, selectedEvent } = this.state;
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

export default EventDashboard;
