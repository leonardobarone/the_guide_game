import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState, createElement, useEffect } from 'react';
import links from '../utils/links';

const Navbar = () => {

  const [active, setActive] = useState(null);

  const location = useLocation();

  useEffect(() => {
    // quando ricarica la pagina
    // se il pathname è uno tra quei cinque rimane attivo
    // 
    const result = links.find(item => item.path === location.pathname);

    if (result) {
      setActive(result.id)      
    } else {
      setActive(null)
    }
  }, [location.pathname]);

  if (
      location.pathname === '/merlato' ||
      location.pathname === '/cannoni' ||
      location.pathname === '/debug' || 
      location.pathname === '/frutta' ||
      location.pathname === '/borgo' || 
      location.pathname === '/porte' ||
      location.pathname === '/san_leonardo' ||
      location.pathname === '/tetto_mondo' ||
      location.pathname === '/figli' ||
      location.pathname === '/cripta' ||
      location.pathname === '/mestieri' ||
      location.pathname === '/san_leonardo_2' ||
      location.pathname === '/tetto_mondo_2' 
    ) {
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
    height: 60px;
    background: var(--gray);
    display: flex;
    justify-content: center;
    ul {
      position: relative;
      display: flex;
      width: 100%;
      li {
        position: relative;
        list-style: none;
        width: calc(100% / 4);
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
            line-height: 60px;
            font-size: 24px;
            transition: 0.5s;
            text-align: center;
            color: black;
            opacity: 0.3;
          }
           .text {
            position: absolute;
            font-weight: 600;
            font-size: 8px;
            color: #ebebeb;
            text-transform: uppercase;
            transform: translateY(0px);
            letter-spacing: 0.05em;
            opacity: 0;
            z-index: 10;
           }
          &:hover {
           .icon {
            color: var(--green);
            opacity: 1;
           } 
          }
        }
        &.active {
          .link {
            .icon {
             opacity: 1;
             color: var(--green);
             transform: translateY(-3px);
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
        /* &:nth-child(5).active ~ .indicator {
          transform: translateX(calc(400%));
        } */
      }
      .indicator {
        position: absolute;
        width: calc(100% / 4);
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
          bottom: 7px;
          width: 50%;
          height: 14px;
          background: var(--green);
          border-radius: 4px;
        }
      }
    }
  }


`;


