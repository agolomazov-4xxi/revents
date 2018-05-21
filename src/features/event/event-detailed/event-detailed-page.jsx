import React from 'react';
import EventDetailedHeader from './event-detailed-header';
import EventDetailedInfo from './event-detailed-info';
import EventDetailedChat from './event-detailed-chat';
import EventDetailedSidebar from './event-detailed-sidebar';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

const EventDetailedPage = props => {
	const { event } = props;
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
