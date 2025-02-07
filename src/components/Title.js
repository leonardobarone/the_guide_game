import styled from "styled-components"

const Title = ({one, two}) => {
  return (<Wrapper>
    <strong>{one} </strong>{two}
  </Wrapper>)
}

export default Title

const Wrapper = styled.h2`
width: 100%;
text-align: center;
  font-size: 30px;
  strong {
    color: var(--purple);
  }
  color: var(--green);
  font-weight: lighter;
  padding: 14px 0px 0px 7px;
`