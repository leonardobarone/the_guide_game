import styled from 'styled-components';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { Link } from 'react-router-dom';
import games from '../utils/games';
import icon from "../images/icon.png";
import { useState } from 'react';

const Mappa = () => {
  const [selectedPlace, setSelectedPlace] = useState(null)

  return <>
    <APIProvider 
      apiKey={"AIzaSyA7zTeRL20KTZpxmmgoSyDIBUZqgdxW1xk"} // process.env.API_KEY
      > 
      <Map
        style={{width: '100%', height: 'calc(100vh - 150.41px)'}}
        defaultCenter={{lat: 40.75791635986094, lng: 14.014870424568413}}
        defaultZoom={13.25}
        gestureHandling={'greedy'} // ??
        // disableDefaultUI={true} // ??
        mapId="b28b9e40a7377c78" // process.env.API_KEY
      >
        {/* INIZIO CICLO */}
        {
          games.map((place) => {
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
                {selectedPlace.game && 
                  <Button>
                    <Link className='link' to={selectedPlace.game}>GIOCA</Link>
                  </Button>
                }
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

export default Mappa;

const Button = styled.div`
  .link {
    display: inline-block;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: #007bff;
  }
`;
