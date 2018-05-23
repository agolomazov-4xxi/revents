import React, {Component} from 'react';
import Script from 'react-load-script';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  state = {
    address: '',
    scriptLoaded: false,
  };

  handleScriptLoad = () => {
    this.setState({
      scriptLoaded: true,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  onChange = address => {
    this.setState({
      address,
    });
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    };
    const {scriptLoaded} = this.state;
    return (
      <div style={{marginTop: 100}}>
        <div style={{height: '100vh', width: '100%'}}>
          <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyD-66s-_moImZvVR-khwrojzOPmcCIdIKk'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default TestComponent;
