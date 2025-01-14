import { useParams } from "react-router-dom";
import places from "../utils/places";

const SingleTappa = () => {
  const {id} = useParams();
  const oggettoTrovato = places.find(oggetto => oggetto.id == id);
  
  return (
    <div>
      {oggettoTrovato.name}
      <img width={200} src={oggettoTrovato.img} alt="" />
    </div>
  )
}

export default SingleTappa;
