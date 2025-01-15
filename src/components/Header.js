import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
        <Link className='link' to="/">
            <h1>Game Of Procida</h1>
        </Link>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    background-color: brown;
    height: 50px;
    font-size: 10px;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    .link {
      color: white;
    }
`;


