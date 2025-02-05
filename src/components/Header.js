import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
        <Link className='link' to="/">
            <h1><strong>Procida</strong> Game</h1>
        </Link>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    position: fixed;
    top: 0px;
    z-index: 3;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray);
    .link {
      h1 {
        font-weight: lighter;
        font-size: 20px;
        color: var(--purple);
      }
      text-decoration: none;
    }
`;


