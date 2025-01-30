import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../../context';

const Place = () => {

    const {places} = useGlobalContext();

    return <Wrapper>
      {places.map((place) => {
        return <div key={place.id} className="cardOutside">
          <div className="cardInside">
            <div className="imgContainer">
              <img src={place.unblocked ? place.imgVisible : place.imgHidden} alt="" />
            </div>
            <h3 style={{backgroundColor: `${place.unblocked ? 'var(--success-bootstrap)' : 'var(--danger-bootstrap)'}`}}>{place.unblocked ? place.name : 'BLOCCATO'}</h3>
          </div>
        </div>
        // return <div key={place.id} className='containerCard'>
        //   <Link to={`/luoghi/${place.unblocked ? place.id : ''}`} className="card link">
        //     <div className="left">
        //       <img src={place.unblocked ? place.imgVisible : place.imgHidden} alt="" />
        //     </div>
        //     <div className="right">
        //       <h5>{place.unblocked ? place.name.toUpperCase() : 'BLOCCATO'}</h5>
        //     </div>
        //   </Link>
        // </div>
      })}
    </Wrapper>
  }
  
  export default Place;
  
  const Wrapper = styled.section`
  margin-top: 60px;
  margin-bottom: 80px;
  height: calc(100% - 140px);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .cardOutside {
    flex-basis: 50%;
    padding: 10px;
  }
  
  .cardInside {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .imgContainer {
      margin-bottom: 8px;
    }
    img {
      display: block;
      width: 85%;
      margin: 0 auto;
    }
    h3 {
      padding: 7px;
      text-align: center;
      text-transform: uppercase;
      font-size: 10px;
      border-radius: 15px;
      color: white;
    }
  }



  /* .containerCard {
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
  } */
  `