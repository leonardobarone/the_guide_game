import styled from 'styled-components';
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

  `