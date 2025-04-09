import styled from "styled-components";
import { useState, useEffect } from "react";

const Winner = ({ numbers }) => {
    const [showWin, setShowWin] = useState(false);
  
    useEffect(() => {
      const isSorted = numbers.every(n => n.value === n.index + 1);
  
      if (isSorted) {
        const timer = setTimeout(() => {
          setShowWin(true);
        }, 2000);
        return () => clearTimeout(timer); // pulizia se i numeri cambiano prima dei 3 sec
      } else {
        setShowWin(false);
      }
    }, [numbers]);
  
    if (!showWin) return null;
  
    return (
      <Wrapper>
        <p>You Won!</p>
      </Wrapper>
    );
  };

export default Winner;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--tile);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: white;
    z-index: 50;
;
`


