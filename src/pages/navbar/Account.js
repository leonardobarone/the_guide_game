import styled from "styled-components";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

const Account = () => {
    return (
      <Wrapper>
        <div className="top">
          <div className="left">
              <MdOutlineArrowBack className="arrowLeft" />
            <div className="nameAccount">
              Leonardo
            </div>
          </div>
          <div className="right">
            <IoIosNotifications className="arrowRight" />
          </div>
        </div>
      </Wrapper>
    )
  }
  
export default Account;
  
const Wrapper = styled.main`
  margin-top: 60px;
  margin-bottom: 75px;
  height: calc(100vh - 140px);
  .top {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .arrowLeft {
        height: 30px;
        width: 30px;
        border: 1px solid black;
        font-size: 25px;
        padding: 3px;
        border-radius: 100%;
      }
      .nameAccount {
        height: 30px;
        margin-left: 10px;
        padding-top: 3px;
        font-size: 22px;
        font-weight: bold;
      }
    }
    .right {
      .arrowRight {
        display: block;
        height: 30px;
        width: 30px;
        border: 1px solid black;
        font-size: 25px;
        padding: 3px;
        border-radius: 100%;
      }
    }
  }
`