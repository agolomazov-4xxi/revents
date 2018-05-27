import React, {Component} from 'react';
import {Segment, Grid, Icon, Button} from 'semantic-ui-react';
import EventDetailedMap from './event-detailed-map';
import format from 'date-fns/format';

class EventDetailedInfo extends Component {
  state = {
    showMap: false,
  };

  componentWillUnmount() {
    this.setState({
      showMap: false,
    });
  }

  showMapToggle = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap,
    }));
  };

  render() {
    const {
      event: {description, date, venue, venueLatLng},
    } = this.props;
    const {showMap} = this.state;
    return (
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>
                {format(date, 'dddd Do MMMM')} at {format(date, 'HH:mm')}
              </span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span>{venue}</span>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button
                color="teal"
                size="tiny"
                content={showMap ? 'Close map' : 'Show map'}
                onClick={this.showMapToggle}
              />
            </Grid.Column>
          </Grid>
        </Segment>
        {showMap && (
          <EventDetailedMap
            lat={venueLatLng.lat}
            lng={venueLatLng.lng}
            zoom={14}
          />
        )}
      </Segment.Group>
    );
  }
}

export default EventDetailedInfo;
