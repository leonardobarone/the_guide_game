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
    padding: 15px 15px 0px 15px;
    &:last-child {
      padding: 15px;
    }
    .card {
      padding: 10px;
      background-color: lightblue;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      box-shadow: 0px 1px 3px black;
    }
    img {
      display: flex;
      width: 100px;
      height: 100px;
      object-fit: cover;
      object-position: center;
    }
    .left {
      width: 35%;
    }
    .right {
      padding: 10px;
      width: 65%;
    }
  }
  `