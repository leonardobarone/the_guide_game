import styled from 'styled-components';
import { Link } from 'react-router-dom';
import student from '../images/student.png'

const Header = () => {
  return (
    <Wrapper>
        <Link className='link' to="/">
            <img src={student} alt="" />
            <h1>Procida Game</h1>
        </Link>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    background-color: var(--bg-gray);
    height: 50px;
    padding-left: 10px;
    font-size: 8px;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .link {
      background-color: var(--bg-white);
      text-decoration: none;
      color: var(--my-text);
      padding: 2px 5px;
      border-radius: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 27px;
      }
      h1 {
        font-size: 14px;
        font-weight: 550;
        padding: 0px 4px 0px 7px;
      }
    }

`;


