import { Link } from "react-router-dom";
import places from "../utils/places";

const Tappe = () => {
    return (
      <div style={{padding: '32px'}}>
        <h1>Pagina Tappe</h1>
        <ul>
          {
            places.map((place) => {
              return <li key={place.id}>
                {place.name}

                {place.game ? <Link to={place.game}>VAI AL GIOCO</Link> : ''}
              
              </li>   
            })
          }
        </ul>
      </div>
    )
  }
  
  export default Tappe;
  