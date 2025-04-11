import styled from "styled-components";
import { Link } from "react-router-dom";
import student from '../../images/student.png';
import { TbCardsFilled } from "react-icons/tb";
import { MdPlace } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { useGlobalContext } from "../../context";
import Title from "../../components/Title";
import useImagesLoaded from "../../utils/useImagesLoaded";
import Loading from "../../components/Loading";

const Account = () => {

    const images = [student];
    const loading = useImagesLoaded(images);

    const {cards, places} = useGlobalContext();
    
    const unblockedCards = cards.filter(obj => obj.unblocked === true);
    const unblockedPlaces = places.filter(obj => obj.unblocked === true);

    if (!loading) return <Loading height={110} />
    
    return (
      <Wrapper>
        <Title name={'la mia home'} />
        <div className="infoHome">
          <img src={student} className="icon" alt="" />
          <div className="name">Arturo Gerace</div>
          <div className="email">arturogerace@gmail.com</div>
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
                    <div className="subtitle">{unblockedPlaces.length} / {places.length}</div>
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
                    <div className="subtitle">{unblockedCards.length} / {cards.length}</div>
                  </div>
                </div>
                <div className="columnRight">
                  <MdKeyboardArrowRight className="icon" />
                </div>
              </Link>
            </li>
           
            
            

            
            
            
    
            <li>
              <Link className="link">
                <div className="columnLeft">
                  <div className="sx">
                    <MdDarkMode className="icon" />
                  </div>
                  <div className="dx">
                    <div className="title">Dark Mode</div>
                    <div className="subtitle">Passa alla modalità notte</div>
                  </div>
                </div>
                <div className="columnRight">
                  <MdKeyboardArrowRight className="icon" />
                </div>
              </Link>
            </li>
    
    
    
    
    
            <li>
              <Link className="link">
                <div className="columnLeft">
                  <div className="sx">
                    <FaBook className="icon" />
                  </div>
                  <div className="dx">
                    <div className="title">Regole</div>
                    <div className="subtitle">Come si gioca</div>
                  </div>
                </div>
                <div className="columnRight">
                  <MdKeyboardArrowRight className="icon" />
                </div>
              </Link>
            </li>
           




            <li>
              <Link to={'/'} className="link">
                <div className="columnLeft">
                  <div className="sx">
                    <LuLogOut className="icon" />
                  </div>
                  <div className="dx">
                    <div className="title">Log Out</div>
                    <div className="subtitle">Esci dal gioco</div>
                  </div>
                </div>
                <div className="columnRight">
                  <MdKeyboardArrowRight className="icon" />
                </div>
              </Link>
            </li>





          </ul>
        </div>
      </Wrapper>
    )
  }
  
export default Account;
  
const Wrapper = styled.main`
  margin-top: 50px;
  margin-bottom: 60px;
  .infoHome {
    margin-top: 7px;
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
      color: var(--purple);
      margin-top: 10px;
      margin-bottom: 3px;
      line-height: 16px;
    }
    .email {
      color: var(--green);
      font-size: 14px;
    }
  }
  .options {
    margin-top: 7px;
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
          .columnLeft .icon, .title {
            color: var(--red) !important;
          }
          .columnRight .icon, .columnLeft .subtitle {
            color: var(--red) !important;
            opacity: 0.7;
          }
          background-color: #FFF3F3;
          border: 1px solid transparent // diventerà transparent;
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
            display: flex;
            align-items: center;
            .icon {
              color: var(--purple);
            }
            .sx {
              margin-right: 15px;
            }
            .title {
              color: var(--purple);
              font-size: 15px;
              line-height: 13px;
              font-weight: bold;
            }
            .subtitle {
              color: var(--green);
              margin-top: 3px;
              font-size: 10px;
            }
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