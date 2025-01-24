import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdBackspace } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const NumericKeyboard = ({ sendDataToParent, rispostaCorretta }) => {
    
    // debug

    const [numero, setNumero] = useState('');
    
    const handleButtonClick = (value) => {
        let limit = numero.length + 1;
        if (value === 'azzera' && numero !== '') {
            setNumero('');
            sendDataToParent('')
        } else if (value === 'indietro' && numero !== '') {;
            setNumero(numero.slice(0, -1));
            sendDataToParent(numero.slice(0, -1));
        } else if (limit < 5 && value !== 'azzera' && value !== 'indietro') {
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
        //       setNumero(numero + val!=ue);
        //     }
        //   }
    }

    useEffect(() => {
        if (numero === rispostaCorretta || numero.length === 4) {
            setNumero('')            
        }
    }, [numero, rispostaCorretta])

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'indietro', 'azzera']; 
    return <>
            {/* <h6>CURRENT NUMBER = {numero}</h6> */}
        <Wrapper>
            <div className="outsideInput">
                <div className="insideInput">
                    <span>{numero ? numero : '...'}</span>
                </div>
            </div>
            {
                numbers.map((number, index) => {
                    let view = number;
                    if (number === 'indietro') {
                        view = <IoMdBackspace />
                    } else if (number === 'azzera') {
                        view = <MdDelete />
                    } else {
                        view = number;
                    }
                    return (
                        <div className='inner'>
                            <button key={index} onClick={() => handleButtonClick(number)}>    
                                <span>{view}</span>
                            </button>
                        </div>
                    )
                })
            }
        </Wrapper>
    </>
}

export default NumericKeyboard;

const Wrapper = styled.div`
    padding: 7px 0px;
    background-color: var(--bg-gray);
    position: fixed;
    z-index: 5;
    bottom: 0px;
    left: 0px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .outsideInput {
        flex-basis: 100%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        padding: 3px 6px 6px 6px;
    }
    .insideInput {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--bg-white);
        padding: 10px 8px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        color: var(--my-text);
        span {
            opacity: 0.3;
        }
    }
    .inner {
        flex-basis: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
            button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 87%;
                height: 87%;
                background-color: var(--bg-white);
                border-style: none;
                border-radius: 10px;
                padding: 10px 0px;
                font-size: 25px;
                color: var(--my-text);
                span {
                    opacity: 0.3;
                }
            }
            /* &:nth-child(3n) {
            border-right: 0px;
        } */
    }
`;


