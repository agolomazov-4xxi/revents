import React, {Component} from 'react';
import {Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import EventListAttendee from './event-list-attendee';
import format from 'date-fns/format';

class EventListItem extends Component {
  render() {
    const {
      id,
      title,
      hostPhotoURL,
      hostedBy,
      date,
      venue,
      description,
      attendees,
      onEventDelete,
    } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {format(date, 'dddd Do MMMM')} at{' '}
            {format(date, 'HH:mm')} |
            <Icon name="marker" /> {venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {attendees &&
              attendees.map(item => (
                <EventListAttendee key={item.id} {...item} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{description}</span>
          <Button
            onClick={onEventDelete}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            as={Link}
            to={`/event/${id}`}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
