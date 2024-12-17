'use client';

import {
  AdvancedMarker,
  APIProvider,
  Map,
  InfoWindow
  // useMap,
} from '@vis.gl/react-google-maps';

// import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { useState } from 'react';
// import { Marker } from '@googlemaps/markerclusterer';
import places from '../places';

// import logo from './logo.svg';
import '../App.css';

const Home = () => {
    return <>
        <h1>The Guide Game</h1>
        <p>Il miglior gioco guida di tutti i tempi!</p>
        <div style={{height: '80vh', width: '100%'}}>
        <APIProvider apiKey='AIzaSyA7zTeRL20KTZpxmmgoSyDIBUZqgdxW1xk'>
            <Map 
            defaultCenter={{lat: 40.7564296094562, lng: 14.013971500161295}} 
            defaultZoom={13} 
            mapId='b28b9e40a7377c78'
            >
            <Markers places={places} />
            </Map>
        </APIProvider>
        </div>  
    </>
}

export default Home;

const Markers = ({ places }) => {
    const [selectedPlace, setSelectedPlace] = useState(null);
    return <>
      {
        places.map((place)=> {
          return <>
            <AdvancedMarker position={place} key={place.id} onClick={()=> setSelectedPlace(place)}>
              <img width={50} src="./icon.png" alt="icon place" />
            </AdvancedMarker>
            {selectedPlace && (<InfoWindow headerContent={<h3>{selectedPlace.name}</h3>} position={selectedPlace} onCloseClick={()=> setSelectedPlace(null)}>
              {selectedPlace.name}
            </InfoWindow>)}
          </>
        })
      }
    </>;
  }
  