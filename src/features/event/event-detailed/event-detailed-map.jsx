import React from 'react';
import {Segment, Icon} from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <Icon name="marker" size="big" color="red" />;

const EventDetailedMap = ({lat, lng, zoom}) => {
  const center = [lat, lng];
  return (
    <Segment attached="bottom" style={{padding: '0'}}>
      <div style={{height: '300px', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyD-66s-_moImZvVR-khwrojzOPmcCIdIKk'}}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;
