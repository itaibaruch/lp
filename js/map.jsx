import React from 'react';
import ReactDOM from "react-dom";

export default class Map extends React.Component {

  state = {
    initialZoom: 17,
    mapCenterLat: 10.7825914,
    mapCenterLng: 106.7,
    markerCenterLat: 10.7825914,
    markerCenterLng: 106.7044296,
  }

  componentDidMount(rootNode) {
    var mapOptions = {
        center: this.mapCenterLatLng(),
        zoom: this.state.initialZoom,
        scrollwheel: false
    },
    map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
    var marker = new google.maps.Marker({
      position: this.markerCenterLatLng(), 
      title: 'Dreamplex Project - A beautiful designed coworking space in HCMC Vietnam', 
      map: map, 
      animation: google.maps.Animation.BOUNCE
    });


    this.setState({map: map});
  }

  mapCenterLatLng() {
    var props = this.state;
    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  }
  markerCenterLatLng() {
    var props = this.state;
    return new google.maps.LatLng(props.markerCenterLat, props.markerCenterLng);
  }

  render () {
    return (
      <div className='map-gic'></div>   
    );
  }
}

// import React from 'react';
// import {GoogleMap, Marker} from "react-google-maps";
// // import GoogleMap from "react-google-maps/lib/GoogleMap";

// export default class Map extends React.Component {

//   state = {
//     markers: [{
//       position: {
//         lat: 10.7810761,
//         lng: 106.6962611,
//       },
//       key: "Taiwan",
//       defaultAnimation: 2
//     }],
//   }


//   render () {
//     return (
//       <GoogleMap containerProps={{
//           ...this.props,
//           style: {
//             height: "100%",
//           },
//         }}
//         ref="map"
//         defaultZoom={18}
//         defaultCenter={{lat: 10.7810761, lng: 106.6962611}}
//       >
//       </GoogleMap>
//     );
//   }
// }


// import React, { Component } from 'react';
// import googleMapsLoader from 'react-google-maps-loader';
 
// const GOOGLE_MAPS_API_KEY = 'myapikey'; // Change your api key 
 
// @googleMapsLoader({ key: GOOGLE_MAPS_API_KEY, libraries: ['places','geometry'] })
// export default class Map extends Component {
//   state = {
//     map: null,
//   }
 
//   componentDidMount() {
//     const { googleMaps } = this.props
//     const map = new googleMaps.Map(React.findDOMNode(this.refs.map))
 
//     this.setState({ map })
//   }
 
//   method() {
//     const { googleMaps } = this.props
 
//     return (
//       <div ref="map"></div>
//     )
//   }
// }