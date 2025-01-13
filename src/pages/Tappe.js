import styled from 'styled-components';
import { Link } from "react-router-dom";
import places from "../utils/places";

const Tappe = () => {
    return <Wrapper>
      {places.map((place) => {
        return <div className='containerCard'>
          <div className="card">
            <div className="left">
              <img src={place.img ? place.img : 'https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg'} alt="" />
            </div>
            <div className="right">
              <h5>{place.name.toUpperCase()}</h5>
            </div>
          </div>
        </div>
      })}
    </Wrapper>
  }
  
  export default Tappe;
  
  const Wrapper = styled.section`

  .containerCard {
    padding: 15px;
    .card {
      padding: 3px;
      border: 1px solid black;
      display: flex;
      justify-content: space-between;
    }
    img {
      width: 100px;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .left {
      width: 30%;
    }
    .right {
      padding: 10px;
      width: 70%;
    }
  }
  `