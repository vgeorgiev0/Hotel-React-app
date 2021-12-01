import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapsLogo from './MapsLogo';

const googleApi = process.env.REACT_APP_API_URL;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.39319998161065,
      lng: 21.782690977741048,
    },
    zoom: 13,
  };

  render() {
    return (
      // Important! Always set the container height explicitlymain5
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApi }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapsLogo lat={43.39319998161065} lng={21.782690977741048} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
