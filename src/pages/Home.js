'use client';

import {
  AdvancedMarker,
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';

import { useState } from 'react';
import places from '../places';

const Home = () => {
  return (
    <>
      <h1>The Guide Game</h1>
      <p>Il miglior gioco guida di tutti i tempi!</p>
      <div style={{ height: '80vh', width: '100%' }}>
        <APIProvider apiKey="AIzaSyA7zTeRL20KTZpxmmgoSyDIBUZqgdxW1xk">
          <Map
            defaultCenter={{ lat: 40.7564296094562, lng: 14.013971500161295 }}
            defaultZoom={13}
            mapId="b28b9e40a7377c78"
            mapContainerStyle={{ position: 'relative' }}
          >
            <Markers places={places} />
          </Map>
        </APIProvider>
      </div>
    </>
  );
};

export default Home;

const Markers = ({ places }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMarkerClick = (place) => {
    setSelectedPlace(place); // Imposta il posto selezionato
  };

  return (
    <>
      {places.map((place) => (
        <AdvancedMarker
          position={place}
          key={place.id}
          onClick={() => handleMarkerClick(place)} // Gestisci il click
        >
          <img width={50} src="./icon.png" alt="icon place" />
        </AdvancedMarker>
      ))}

      {selectedPlace && (
        <CustomPopup
          position={selectedPlace} // Posizione dell'elemento
          content={
            <div>
              <h3>{selectedPlace.name}</h3>
              <p>HO PIENO CONTROLLO DI QUESTA FINESTA CHE VIENE APERTA DOPO IL CLICK MA ORA DEVO CAPIRE COME METTERLA VICINO AL PUNTINO SELEZIONATO!</p>
              <button onClick={() => setSelectedPlace(null)}>Chiudi</button>
            </div>
          }
        />
      )}
    </>
  );
};

const CustomPopup = ({ position, content }) => {
  // const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  // useEffect(() => {
  //   // Calcolare una posizione fissa sopra il marker
  //   const offsetY = -40; // Distanza sopra il marker
  //   const offsetX = -25; // Distanza orizzontale (centrata sopra il marker)

  //   setPopupPosition({
  //     top: position.lat + offsetY,
  //     left: position.lng + offsetX,
  //   });
  // }, [position]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '100px', // Posiziona il popup sopra il marker
        left: '50px',
        backgroundColor: 'white',
        padding: '10px',
        zIndex: 10,
      }}
    >
      {content}
    </div>
  );
};
