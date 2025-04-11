import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Error from "../Error";
import styled from "styled-components";
import Title from "../../components/Title";

const CardItem = () => {
  const {cards} = useGlobalContext();
  const {id} = useParams();
  const oggettoTrovato = cards.find(oggetto => oggetto.id === id && oggetto.unblocked);
  
  if (!oggettoTrovato) {
    return <Error />
  } 

  return (
    <Wrapper style={{marginTop: '50px', marginBottom: '75px'}}>
      <Title name={oggettoTrovato.name} />
      <p>
        {oggettoTrovato.description}
      </p>
    </Wrapper>
  )
}

export default CardItem;

const Wrapper = styled.section`
  
`
