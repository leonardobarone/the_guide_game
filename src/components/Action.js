import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { FaTrophy } from "react-icons/fa";

const Action = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link className='link' to="#">
            <MdAccountCircle style={{fontSize: "28px", marginBottom: '4px'}} />
            <h2>Account</h2>
          </Link>
          </li>
        <li>
          <Link className='link' to="#">
            <IoNewspaperOutline style={{fontSize: "28px", marginBottom: '4px'}} />
            <h2>Regole</h2>
          </Link>
          </li>
        <li>
          <Link className='link' to="/">
            <FaMapMarkerAlt style={{fontSize: "28px", marginBottom: '4px'}} />
            <h2>Mappa</h2>
          </Link>
          </li>
        <li>
          <Link className='link' to="/quiz">
            <CiFlag1 style={{fontSize: "28px", marginBottom: '4px'}} />
            <h2>Tappe</h2>
          </Link>
          </li>
        <li>
          <Link className='link' to="#">
            <FaTrophy style={{fontSize: "28px", marginBottom: '4px'}} />
            <h2>Obiettivi</h2>
          </Link>
          </li>
      </ul>
    </Wrapper>
  )
}

export default Action;

const Wrapper = styled.nav`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    position: fixed;
    padding: 16px;
    z-index: 16;
    background-color: white;
    border-top: 1px solid black;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        text-align: center;
        h2 {
          font-size: 12px;
        }
      }
    }
`;


