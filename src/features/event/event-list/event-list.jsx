import React, {Component} from 'react';
import EventListItem from './event-list-item';

class EventList extends Component {
  render() {
    const {events, onEventEdit, onEventDelete} = this.props;
    return (
      <div>
        {events &&
          events.map(event => (
            <EventListItem
              key={event.id}
              {...event}
              onEventEdit={() => onEventEdit(event)}
              onEventDelete={() => onEventDelete(event.id)}
            />
          ))}
      </div>
    );
  }
}

export default EventList;
