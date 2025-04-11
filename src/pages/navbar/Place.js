import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { useState } from 'react';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import usePlacesLoaded from '../../utils/usePlacesLoaded';
import Loading from "../../components/Loading";

const Place = () => {

    const {places} = useGlobalContext();

    const [filtro, setFiltro] = useState('tutti');
    const loading = usePlacesLoaded(places);
    
      const filteredPlaces = () => {
    
        places.sort((a, b) => {
          const timeA = a.time ? new Date(a.time.split('/').reverse().join('-')) : null;
          const timeB = b.time ? new Date(b.time.split('/').reverse().join('-')) : null;
        
          if (timeA && timeB) {
            return timeB.getTime() - timeA.getTime(); // Ordina per tempo decrescente (dal più recente al più vecchio)
          } else if (timeA) {
            return -1; // a viene prima se ha un orario
          } else if (timeB) {
            return 1; // b viene prima se ha un orario
          } else {
            return 0; // Mantieni l'ordine originale se entrambi non hanno orario
          }
        });
        
        switch (filtro) {
          case 'tutti' :
            return places;
          case 'sbloccati' :
            return places.filter(place => place.unblocked === true);
          case 'bloccati' : 
            return places.filter(place => place.unblocked === false);
          default: 
            return places;
        } 
      }

    if (!loading) return <Loading />


    return <Wrapper>

        <Title name={'i miei luoghi'} />

        <div className="buttons">
          <div onClick={() => setFiltro('tutti')} className={filtro === 'tutti' ? 'btn active' : 'btn' }>Tutti</div>
          <div onClick={() => setFiltro('bloccati')} className={filtro === 'bloccati' ? 'btn active' : 'btn' }>Bloccati</div>
          <div onClick={() => setFiltro('sbloccati')} className={filtro === 'sbloccati' ? 'btn active' : 'btn' }>Sbloccati</div>
        </div>

      {filteredPlaces().map((place) => {
        return <Link to={place.unblocked ? `/luoghi/${place.id}` : ''} key={place.id} className="cardOutside">
          <div className="cardInside">
            <div className="imgContainer">
              <img src={place.unblocked ? place.imgVisible : place.imgHidden} alt="" />
            </div>
            <h3 style={{backgroundColor: `${place.unblocked ? 'var(--green)' : 'var(--red)'}`}}>{place.unblocked ? place.name : 'Bloccato' }</h3>
          </div>
        </Link>
      })}
    </Wrapper>
  }
  
  export default Place;
  
  const Wrapper = styled.section`
margin-top: 50px;
margin-bottom: 60px;


.buttons {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 14px 0px 7px 7px;
    .btn {
      font-size: 14px;
      margin-right: 7px;
      padding: 6px 18px;
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid var(--gray);
      color: var(--purple);
      background-color: white;
      &.active {
        border: 1px solid transparent;
        background-color: var(--green);
        color: white;
      }
    }
  }


  height: calc(100% - 140px);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .cardOutside {
    text-decoration: none;
    flex-basis: 50%;
    padding: 8px 4px 8px 8px;
    &:nth-child(2n) {
      padding: 8px 8px 8px 4px;
    }
  }
  
  .cardInside {
    padding: 4px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .imgContainer {
      margin-bottom: 8px;
    }
    img {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
    h3 {
      margin-top: 10px;
      margin: 10px 1px 0px 1px;
      padding: 8px 0px;
      text-align: center;
      text-transform: capitalize;
      font-size: 13px;
      font-weight: lighter;
      border-radius: 4px;
      color: white;
    }
  }

  `