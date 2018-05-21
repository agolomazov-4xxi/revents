import React from 'react';
import EventDetailedHeader from './event-detailed-header';
import EventDetailedInfo from './event-detailed-info';
import EventDetailedChat from './event-detailed-chat';
import EventDetailedSidebar from './event-detailed-sidebar';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

const event = {
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
};

const EventDetailedPage = () => {
	return (
		<Grid>
			<Grid.Column width={10}>
				<EventDetailedHeader event={event} />
				<EventDetailedInfo event={event} />
				<EventDetailedChat />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventDetailedSidebar attendees={event.attendees} />
			</Grid.Column>
		</Grid>
	);
};

const mapStateToProps = (state, ownProps) => {
	const eventId = ownProps.match.params.id;
	let event = {};

	if (eventId && state.events.length > 0) {
		event = state.events.find(eventItem => eventItem.id === eventId);
	}

	return {
		event,
	};
};

export default connect(mapStateToProps)(EventDetailedPage);
