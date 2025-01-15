import { useState } from 'react';
import styled from 'styled-components';


const NumericKeyboard = () => {
    
    const [numero, setNumero] = useState('0')
    
    const handleButtonClick = (value) => {
        if (value === 'cancella') {
            setNumero('0');
          } else if (value === 'prova') {
            console.log('Prova button clicked!');
          } else {
            // Verifica se il numero inizia con zero per evitare zeri inutili
            if (numero === '0') {
              setNumero(value);
            } else {
              setNumero(numero + value);
            }
          }
    }

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'cancella', '0', 'prova']; 
    return <>
            <h6>Current number: {numero}</h6>
        <Wrapper>
            {
                numbers.map((number, index) => {
                    return <button key={index} onClick={() => handleButtonClick(number)}>
                        {number}
                    </button>
                })
            }
        </Wrapper>
    </>
}

export default NumericKeyboard;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid black;
    button {
        width: 33.33%;
        background-color: brown;
        border-style: none;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        padding: 5px 0px;
        &:nth-child(3n) {
            border-right: 0px;
        }
    }
`;


