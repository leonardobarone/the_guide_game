import styled from "styled-components";
import Keyboard from "../../components/Keyboard";
import Title from "../../components/Title";
import { useState } from "react";

const Frutta = () => {

    const [dataFromChild, setDataFromChild] = useState("");
    const [popup, setPopup] = useState(false); 

    function handleDataFromChild(data) {
        setDataFromChild(data);
    } 
    
  return <Wrapper>
    <Title one={'Frutta '} two={'Mista'} />
    ciao, questo è il quiz della frutta {dataFromChild} {popup ? 'true' : 'false'}
    <Keyboard sendDataToParent={handleDataFromChild} popup={popup} />
  </Wrapper>
}

export default Frutta

const Wrapper = styled.main`
    margin-top: 40px;
`