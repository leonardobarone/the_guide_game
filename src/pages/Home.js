import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import places from '../utils/places';
import icon from "../images/icon.png";
import { useState } from 'react';

const Home = () => {
  const [selectedPlace, setSelectedPlace] = useState(null)

  return <>
    <APIProvider 
      apiKey={"AIzaSyA7zTeRL20KTZpxmmgoSyDIBUZqgdxW1xk"} // process.env.API_KEY
    > 
      <Map
        style={{width: '100vw', height: '100vh'}}
        defaultCenter={{lat: 40.7564296094562, lng: 14.013971500161295}}
        defaultZoom={13}
        gestureHandling={'greedy'} // ??
        disableDefaultUI={true} // ??
        mapId="b28b9e40a7377c78" // process.env.API_KEY
      >
        {/* INIZIO CICLO */}
        {
          places.map((place) => {
            return (<>
              <AdvancedMarker
                position={place}
                key={place.id}
                onClick={()=> setSelectedPlace(place)}
              >
                <img 
                  width={50} 
                  src={icon} 
                  alt="icon place description" 
                />
              </AdvancedMarker>
              {/* INIZIO CONDIZIONE */}
              {selectedPlace && <InfoWindow 
                headerContent={<h2>{selectedPlace.name}</h2>}
                position={selectedPlace} 
                onCloseClick={()=> setSelectedPlace(null)}
              >
                <p>Qui puoi andare al quiz del seguente luogo: {selectedPlace.name}</p>
              </InfoWindow>}
              {/* FINE CONDIZIONE */}
            </>
            )
          })
        }
        {/* FINE CICLO */}
      </Map>      
    </APIProvider>
  </>;
}

export default Home;
