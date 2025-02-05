import styled from 'styled-components';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../../context";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from 'react';

const Mappa = () => {
  const {games} = useGlobalContext();
  const [selectedGame, setSelectedGame] = useState(null)

  return <Wrapper>
    <APIProvider 
      apiKey={"AIzaSyA7zTeRL20KTZpxmmgoSyDIBUZqgdxW1xk"} // process.env.API_KEY
      > 
      <Map
        className='mappa'
        defaultCenter={{lat: 40.75791635986094, lng: 14.014870424568413}}
        defaultZoom={13.25}
        gestureHandling={'greedy'} // ??
        // disableDefaultUI={true} // ??
        mapId="b28b9e40a7377c78" // process.env.API_KEY
      >
        {/* INIZIO CICLO */}
        {
          games.map((game, item) => {
            if (game.unblocked === true) {
              return null;
            } else {
              return <AdvancedMarker
                  position={game}
                  key={item}
                  onClick={()=> setSelectedGame(game)}
                >
                  <FaMapMarkerAlt style={{fontSize: '33px', color: '#EA4335'}} />
                  {selectedGame && <InfoWindow
                    headerContent={<h2>{selectedGame.name}</h2>}
                    position={selectedGame} 
                    onCloseClick={()=> setSelectedGame(null)}
                  >
                   <Link className='link' to={selectedGame.path}>GIOCA</Link>                    
                  </InfoWindow>}
                </AdvancedMarker>
            }
              
          })
        }
        {/* FINE CICLO */}
      </Map>      
    </APIProvider>
  </Wrapper>;
}

export default Mappa;

const Wrapper = styled.main`
  .mappa {
    margin-top: 40px;
    margin-bottom: 6px;
    height: calc(100vh - 100px);
  }
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
