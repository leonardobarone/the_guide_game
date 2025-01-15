import styled from 'styled-components';
import { Link } from "react-router-dom";
import places from "../utils/places";

const Tappe = () => {
    return <Wrapper>
      {places.map((place) => {
        return <div key={place.id} className='containerCard'>
          <Link to={`/tappe/${place.risolto ? place.id : ''}`} className="card link">
          {!place.risolto ? <div className='bloccato'>DA FARE</div> : ''}
            <div className="left">
              <img src={place.img} alt="" />
            </div>
            <div className="right">
              <h5>{place.name.toUpperCase()}</h5>
            </div>
          </Link>
        </div>
      })}
    </Wrapper>
  }
  
  export default Tappe;
  
  const Wrapper = styled.section`

  .containerCard {
    padding: 10px 10px 0px 10px;
    &:last-child {
      padding: 10px;
    }
    .bloccato {
      padding: 10px 0px;
      background-color: brown;
      position: absolute;
      font-size: 10px;
      color: white;
      width: 100%;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .card {
      border-bottom: 1px solid gray;
      position: relative;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      .card {
        border-style: none;
      }
    }
    img {
      display: block;
      width: 80px;
      height: 80px;
      object-fit: cover;
      object-position: center;
    }
    .left {
      width: 25%;
    }
    .right {
      padding: 10px;
      width: 75%;
    }
  }
  `