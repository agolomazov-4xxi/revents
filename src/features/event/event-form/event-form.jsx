import React, { Component } from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import cuid from 'cuid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateEvent, createEvent } from '../event-list/event-actions';
import TextInput from '../../../app/common/form/text-input';
import TextArea from '../../../app/common/form/text-area';

class EventForm extends Component {
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
		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment>
						<Form onSubmit={this.onSubmit}>
							<Header sub color="teal" content="Event Details" />
							<Field
								name="title"
								type="text"
								component={TextInput}
								placeholder="Give your event a name"
							/>
							<Field
								name="category"
								type="text"
								component={TextInput}
								placeholder="What is your event about?"
							/>
							<Field
								name="description"
								type="text"
								component={TextArea}
								placeholder="Tell us about your event"
							/>
							<Header sub color="teal" content="Event Location Details" />
							<Field name="city" type="text" component={TextInput} placeholder="Event City" />
							<Field name="venue" type="text" component={TextInput} placeholder="Event Venue" />
							<Field name="date" type="date" component={TextInput} placeholder="Event Date" />

							<Button positive type="submit">
								Submit
							</Button>
							<Button type="button" onClick={() => this.props.history.goBack()}>
								Cancel
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'eventForm' })(EventForm)));
