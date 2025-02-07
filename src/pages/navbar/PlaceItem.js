import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import grid from '../../images/grid.svg'
import Error from "../Error";

const PlaceItem = () => {
  const {places} = useGlobalContext();
  const {id} = useParams();
  const oggettoTrovato = places.find(oggetto => oggetto.id === id);
  
  if (!oggettoTrovato) {
    return <Error />
  } 

  return (
    <div style={{marginTop: '50px', marginBottom: '75px'}}>
      <img width={'250'} src={oggettoTrovato.imgVisible} alt="" />
      <img src={grid} alt="" />
      <h2 style={{textAlign: 'center', textTransform: 'capitalize'}}>{oggettoTrovato.name}</h2>
    </div>
  )
}

export default PlaceItem;
