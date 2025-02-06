import styled from "styled-components";
import { Link } from "react-router-dom";
import student from '../../images/student.png';
import { TbCardsFilled } from "react-icons/tb";
import { MdPlace } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Account = () => {
    return (
      <Wrapper>
        {/* <Title one={'La Mia'} two={'Home'} /> */}
        <div className="infoHome">
          <img src={student} className="icon" alt="" />
          <div className="name">Leonardo Barone</div>
          <div className="email">leonardobarone26@gmail.com</div>
        </div>
        <div className="options">
          <ul>
              
              
              
              
            <li>
              <Link to={'/luoghi'} className="link">
                <div className="columnLeft">
                  <div className="sx">
                    <MdPlace className="icon" />
                  </div>
                  <div className="dx">
                    <div className="title">Luoghi</div>
                    <div className="subtitle">7 / 15</div>
                  </div>
                </div>
                <div className="columnRight">
                  <MdKeyboardArrowRight className="icon" />
                </div>
              </Link>
            </li>
           

                         
            <li>
              <Link to={'/carte'} className="link">
                <div className="columnLeft">
                  <div className="sx">
                    <TbCardsFilled className="icon" />
                  </div>
                  <div className="dx">
                    <div className="title">Carte</div>
                    <div className="subtitle">2 / 10</div>
                  </div>
                </div>
                <div className="columnRight">
                  <MdKeyboardArrowRight className="icon" />
                </div>
              </Link>
            </li>
           
            
            

            
            
            
            
            
            <li>
              <Link className="link">
                Dark Mode (?)
              </Link>
            </li>
            <li>
              <Link className="link">
                Regole
              </Link>
            </li>
            <li>
              <Link className="link">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    )
  }
  
export default Account;
  
const Wrapper = styled.main`
  margin-top: 40px;
  margin-bottom: 60px;
  .infoHome {
    margin-top: 55px;
    padding: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      height: 65px;
    }
    .name {
      font-size: 20px;
      font-weight: bold;
      margin: 5px 0px 2px 0px;
      color: var(--purple);
    }
    .email {
      color: var(--green);
      font-size: 14px;
    }
  }
  .options {
    margin-top: 15px;
    padding: 7px;
    ul {
      list-style: none;
      li {
        &:not(:last-child) {
          margin-bottom: 7px;
        }
        &:not(:last-child) .link {
          border: 1px solid var(--gray);
        }
        &:last-child .link {
          border: 1px solid pink // diventerà transparent;
        }
        .link {
          color: black;
          border-radius: 4px;
          padding: 10px;
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .icon {
            display: block;
            height: 100%;
            font-size: 25px;
          }
          .columnLeft {
            .icon {
              color: var(--purple);
            }
            .sx {
              margin-right: 15px;
            }
            .title {
              color: var(--purple);
              font-size: 15px;
              font-weight: bold;
            }
            .subtitle {
              color: var(--green);
              margin-top: 3px;
              font-size: 10px;
            }
            display: flex;
            align-items: center;
          }
          .columnRight {
            .icon {
              color: var(--green);
            }
          }
        }
      }
    }
  }
`