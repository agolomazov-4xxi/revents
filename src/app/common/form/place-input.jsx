import React, {Component} from 'react';
import {Form, Label} from 'semantic-ui-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import Script from 'react-load-script';

const styles = {
  autocompleteContainer: {
    zIndex: 1000,
  },
};

class PlaceInput extends Component {
  state = {
    scriptLoaded: false,
  };

  handleScriptLoaded = () => this.setState({scriptLoaded: true});

  render() {
    const {
      input,
      width,
      onSelect,
      placeholder,
      options,
      meta: {touched, error},
    } = this.props;
    const {scriptLoaded} = this.state;
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-66s-_moImZvVR-khwrojzOPmcCIdIKk&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        {scriptLoaded && (
          <PlacesAutocomplete
            inputProps={{
              ...input,
              placeholder,
            }}
            options={options}
            onSelect={onSelect}
            styles={styles}
          />
        )}
        {touched &&
          error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
      </Form.Field>
    );
  }
}

export default PlaceInput;
