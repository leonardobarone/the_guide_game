import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState, createElement } from 'react';
import links from '../utils/links';

const Navbar = () => {

  const [active, setActive] = useState(null);

  const location = useLocation();
  if (location.pathname === '/quiz' || location.pathname === '/secondQuiz') {
    return;
  }

  const activeLink = (linkId) => {
    setActive(linkId);
  }  

  return (
    <Wrapper>
      <div className="navigation">
        <ul>
          {
            links.map((link) => {
              return (
                <li onClick={()=> activeLink(link.id)} key={link.id} className={active === link.id ? 'active list' : 'list'}>
                  <Link className='link' to={link.path}>
                    <span className="icon">{createElement(link.icon)}</span>
                    <span className="text">{link.text}</span>
                  </Link>
                </li>
              )
            })
          }
          <div className={active ? 'indicator' : ''}></div>
        </ul>
      </div>   
    </Wrapper>
  )
}

export default Navbar;

const Wrapper = styled.nav`

  .navigation {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 10;
    height: 80px;
    background: #2f2f2f;
    display: flex;
    justify-content: center;
    ul {
      position: relative;
      display: flex;
      // db
      width: 100%;
      li {
        position: relative;
        list-style: none;
        width: calc(100% / 5);
        height: 80px;
        .link {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          text-align: center;
          font-weight: 500;
          .icon {
            position: relative;
            display: block;
            line-height: 85px;
            font-size: 1.5em;
            transition: 0.5s;
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
          }
           .text {
            position: absolute;
            font-weight: 600;
            font-size: 0.6em;
            color: #222327;
            text-transform: uppercase;
            transform: translateY(0px);
            letter-spacing: 0.05em;
            opacity: 0;
            z-index: 10;
           }
          &:hover {
           .icon {
            color: rgba(255, 255, 255, 1);
           } 
          }
        }
        &.active {
          .link {
            .icon {
             color: #29fd53;
             transform: translateY(-8px);
           }
           .text {
            opacity: 1;
            transform: translateY(16px);
           }
          }
        } 
        &:nth-child(2).active ~ .indicator {
          transform: translateX(calc(100%));
        }
        &:nth-child(3).active ~ .indicator {
          transform: translateX(calc(200%));
        }
        &:nth-child(4).active ~ .indicator {
          transform: translateX(calc(300%));
        }
        &:nth-child(5).active ~ .indicator {
          transform: translateX(calc(400%));
        }
      }
      .indicator {
        position: absolute;
        width: calc(100% / 5);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.5s;
        z-index: -1;
        &::before {
          content: '';
          position: absolute;
          bottom: 13px;
          width: 85%;
          height: 18px;
          background: #29fd23;
          border-radius: 10px;
        }
      }
    }
  }


`;


