import styled from "styled-components"

const Title = ({name}) => {
  const ultimoSpazio = name.lastIndexOf(" ");
  const ultimaParola = name.slice(ultimoSpazio + 1);
  const tutteMenoUltima = name.split(" ").slice(0, -1).join(" ");

  return (<Wrapper>
    <strong>{tutteMenoUltima + ' '}</strong>
    <span>{ultimaParola}</span>
  </Wrapper>)
}

export default Title

const Wrapper = styled.h2`
width: 100%;
text-align: center;
  font-size: 30px;
  strong {
    color: var(--purple);
    text-transform: capitalize;
  }
  span {
    text-transform: capitalize;
  }
  color: var(--green);
  font-weight: lighter;
  padding: 7px 0px 0px;
`