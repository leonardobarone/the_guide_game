import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Error from "../Error";
import styled from "styled-components";
import Title from "../../components/Title";
import useImagesLoaded from '../../utils/useImagesLoaded';
import Loading from '../../components/Loading';

const PlaceItem = () => {
  const {places} = useGlobalContext();
  const {id} = useParams();
  const oggettoTrovato = places.find(oggetto => oggetto.id === id && oggetto.unblocked);
  const images = [oggettoTrovato.imgCover];
  const loading = useImagesLoaded(images);

  if (!oggettoTrovato) {
    return <Error />
  } 

  if (!loading) return <Loading height={110}/>

  return (
    <Wrapper style={{marginTop: '50px', marginBottom: '75px'}}>
      <Title name={oggettoTrovato.name} />
      <div className="cover">
        <img src={oggettoTrovato.imgCover} alt="" />
      </div>
      <p>
        {oggettoTrovato.description}
      </p>
    </Wrapper>
  )
}

export default PlaceItem;

const Wrapper = styled.section`
    .cover {
      img {
        width: 100%;
        display: block;
        border-radius: 4px;
      }
      padding: 7px;
    }
    p {
      padding: 3px 10px;
    }
`
