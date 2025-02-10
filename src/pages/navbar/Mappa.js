import styled from 'styled-components';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../../context";
import { MdLocationPin } from "react-icons/md";
import { useState, useEffect } from 'react';

const Mappa = () => {
  const {games} = useGlobalContext();

  const [selectedGame, setSelectedGame] = useState(null);
    // INIZIO PROVA HEIGHT
    const [height, setHeight] = useState(window.innerHeight - 100);
    
    useEffect(() => {
      const updateHeight = () => setHeight(window.innerHeight - 100);
  
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, []);
    // INIZIO PROVA HEIGHT

  return <Wrapper>
    <APIProvider 
      apiKey={"AIzaSyA7zTeRL20KTZpxmmgoSyDIBUZqgdxW1xk"} // process.env.API_KEY
      > 
      <Map
        // className='mappa'
        style={{height: `${height}px`, marginTop: '40px', marginBottom: '60px'}}
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
                  <MdLocationPin style={{fontSize: '33px', color: 'var(--purple)'}} />
                  {selectedGame && <InfoWindow
                    headerContent={<h2 style={{textTransform: 'capitalize'}} >{selectedGame.name}</h2>}
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
