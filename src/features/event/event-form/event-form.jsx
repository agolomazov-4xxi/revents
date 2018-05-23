import React, {Component} from 'react';
import {Segment, Form, Button, Grid, Header} from 'semantic-ui-react';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan,
} from 'revalidate';
import moment from 'moment';
import {Field, reduxForm} from 'redux-form';
import cuid from 'cuid';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {updateEvent, createEvent} from '../event-list/event-actions';
import TextInput from '../../../app/common/form/text-input';
import TextArea from '../../../app/common/form/text-area';
import SelectInput from '../../../app/common/form/select-input';
import DateInput from '../../../app/common/form/date-input';

const category = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'},
];

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(5)({
      message: 'Description needs to be at least 5 characters',
    })
  )(),
  city: isRequired({message: 'Set city event'}),
  venue: isRequired({message: 'Venue field is not empty'}),
  hostedBy: isRequired({message: 'Set organizator'}),
  date: isRequired('date'),
});

class EventForm extends Component {
  onSubmit = (values, invalid) => {
    if (invalid) {
      return;
    }
    values.date = moment(values.date).format();
    if (this.props.initialValues.id) {
      this.props.onUpdate(values);
      this.props.history.goBack();
    } else {
      const event = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
      };
      this.props.onCreate(event);
      this.props.history.push(`/event/${event.id}`);
    }
  };

  render() {
    const {invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form
              onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values, invalid)
              )}
            >
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
                component={SelectInput}
                options={category}
                placeholder="What is your event about?"
              />
              <Field
                name="description"
                type="text"
                component={TextArea}
                placeholder="Tell us about your event"
              />
              <Field
                name="hostedBy"
                type="text"
                component={TextInput}
                placeholder="Hosted by"
              />

              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Event City"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Event Venue"
              />
              <Field
                name="date"
                type="date"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Date and Time of event"
              />

              <Button
                positive
                type="submit"
                disabled={invalid || submitting || pristine}
              >
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

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.find(event => event.id === eventId);
  }

  return {
    initialValues: event,
  };
};

const mapDispatchToProps = dispatch => ({
  onUpdate: event => dispatch(updateEvent(event)),
  onCreate: event => dispatch(createEvent(event)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({form: 'eventForm', enableReinitialize: true, validate})(
      EventForm
    )
  )
);
