import { useState } from 'react';
import styled from 'styled-components';


const NumericKeyboard = ({ sendDataToParent }) => {
    
    // debug

    const [numero, setNumero] = useState('');
    
    const handleButtonClick = (value) => {
        let limit = numero.length + 1;
        if (value === 'azzera' && numero != '') {
            setNumero('');
            sendDataToParent('')
        } else if (value === 'indietro') {;
            setNumero(numero.slice(0, -1));
            sendDataToParent(numero.slice(0, -1));
        }   else if (limit < 5 && value != 'azzera') {
            setNumero(prevNumero => prevNumero + value);
            sendDataToParent(prevNumero => prevNumero + value);
        }
        // if (value === 'azzera') {
        //     alert('SONO QUI')
        //     setNumero('0');
        //     return;
        //   } else if (value === 'indietro') {
        //     console.log('indietro button clicked!');
        //   } else {
        //     // Verifica se il numero inizia con zero per evitare zeri inutili
        //     if (numero === '0') {
        //       setNumero(value);
        //     } else {
        //       setNumero(numero + value);
        //     }
        //   }
    }

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'indietro', '0', 'azzera']; 
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
        padding: 9px 0px;
        font-size: 25px;
        color: white;
        text-shadow: 0px 1px 3px black;
        &:nth-child(3n) {
            border-right: 0px;
        }
    }
`;


