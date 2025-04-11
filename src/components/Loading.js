import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useHeight from "../utils/useHeight";

const Loading = ({height}) => {
    // Per calcolare l'altezza
  const altezza = useHeight(height);
  return <Wrapper className="loading" style={{ height: `${altezza}px`}}>
    <AiOutlineLoading3Quarters className="icon" />
  </Wrapper>
}

export default Loading;

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 75px;
    color: var(--green);
    border: 1px solid black;


@keyframes rotate {
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.icon {
    animation: rotate 2s linear infinite;
}
`