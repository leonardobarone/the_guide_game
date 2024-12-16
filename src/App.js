'use client';

import {
  AdvancedMarker,
  APIProvider,
  Map,
  // useMap,
} from '@vis.gl/react-google-maps';

// import { MarkerClusterer } from '@googlemaps/markerclusterer';
// import { useEffect, useState, useRef } from 'react';
// import { Marker } from '@googlemaps/markerclusterer';
import places from './places';

// import logo from './logo.svg';
import './App.css';

function App() {
  return <>
    <h1>The Guide Game</h1>
    <p>Il miglior gioco guida di tutti i tempi!</p>
    <div style={{height: '80vh', width: '100%'}}>
      <APIProvider apiKey='AIzaSyA7zTeRL20KTZpxmmgoSyDIBUZqgdxW1xk'>
        <Map 
          center={{lat: 40.7564296094562, lng: 14.013971500161295}} 
          zoom={13} 
          mapId={'b28b9e40a7377c78'}
        >
          <Markers places={places} />
        </Map>
      </APIProvider>
    </div>
  </>;
}

export default App;

const Markers = ({ places }) => {
  return <>
    {places.map( place => <AdvancedMarker position={place} key={place.id}>
      <img width={33} src="./icon.png" alt="icon place" />
    </AdvancedMarker>)}
  </>;
}
