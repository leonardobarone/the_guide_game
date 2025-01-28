import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";

const ItemPlace = () => {
  const {places} = useGlobalContext();
  const {id} = useParams();
  const oggettoTrovato = places.find(oggetto => oggetto.id === id);
  
  return (
    <div style={{marginTop: '50px', marginBottom: '75px'}}>
      <img width={'100%'} src={oggettoTrovato.img} alt="" />
      <h2 style={{textAlign: 'center', textTransform: 'capitalize'}}>{oggettoTrovato.name}</h2>
    </div>
  )
}

export default ItemPlace;
