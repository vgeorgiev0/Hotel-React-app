// import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// import React from 'react';

// const Maps = withGoogleMap((props) => (
//   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//     <Marker position={{ lat: -34.397, lng: 150.644 }} />
//   </GoogleMap>
// ));
// <Maps
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />;

// const DefaultMap = () => {
//   return (
//     <div>
//       <Maps />
//     </div>
//   );
// };

// export default DefaultMap;

import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const googleApi = process.env.API_URL;

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleApi}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 43.39319998161065, lng: 21.782690977741048 }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 43.39319998161065, lng: 21.782690977741048 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class Maps extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default Maps;
