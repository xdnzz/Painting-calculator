import { useState, useContext, useEffect } from 'react';
import '../style.css';
import { CountContext } from '../../../contexts/total';
import { Plus, Minus } from "phosphor-react";
import {WarningMessage} from '../../warning/Index'

export function MeasuresFirst() {



    const [handleValueHeight, setHandleValueHeight] = useState<any>(0)
    const [handleValueWidth, setHandleValueWidth] = useState<any>(0)
    const [handleValueWindows, setHandleValueWindows] = useState<any>(0)
    const [handleValueDoors, setHandleValueDoors] = useState<any>(0)
    const { altura, setAltura, largura, setLargura, janela, setJanela, porta, setPorta } = useContext(CountContext)

    const handleTotalWidthHeight = handleValueHeight * handleValueWidth //Obtendo as medidas por m² da altura e largura
    const handleTotalWindowDoor = handleValueWindows + handleValueDoors //Obtendo as medidas por m² da janela e porta
    const handleFinalResult = handleTotalWidthHeight - handleTotalWindowDoor //Obtendo o resultado do total de m² disponível
    const latasDeTinta = handleFinalResult/5 


    function incrementHeight() {
      
        setHandleValueHeight(handleValueHeight + 1);
        setAltura(altura + 1);

    }

    function decrementHeight() {
        if (handleValueHeight === 0) return;
        setHandleValueHeight(handleValueHeight - 1);
        setAltura(altura - 1);
    }

    function incrementWidth() {
        console.log(handleTotalWidthHeight)

        if (handleTotalWidthHeight >15) {
            alert('Tamanho da parede excedido');
            return;
        }
        setHandleValueWidth(handleValueWidth + 1);
        setLargura(largura + 1)
    }

    function decrementWidth() {
        if (handleValueWidth === 0) return;
        setHandleValueWidth(handleValueWidth - 1);
        setLargura(largura - 1)
    }


    function incrementWindow() {
        if(handleTotalWindowDoor> 50*handleTotalWidthHeight/100) {
            alert('Quantidade permitida para as medidas providas excedido');
            return;

        }

        setHandleValueWindows(handleValueWindows + 2.4);
        setJanela(janela + 1);
    }

    function decrementWindow() {
        if (handleValueWindows === 0) return;
        setHandleValueWindows(handleValueWindows - 2.4);
        setJanela(janela - 1);
    }

    function incrementDoors() {
        if(handleTotalWindowDoor> 50*handleTotalWidthHeight/100) {
            alert('Quantidade permitida para as medidas providas excedido');
            console.log(handleTotalWindowDoor)
            return;
        }

        setHandleValueDoors(handleValueDoors + 1.5);
        setPorta(porta + 1);

    }

    function decrementDoors() {
        if (handleValueDoors === 0) return;
        setHandleValueDoors(handleValueDoors - 1.5);
        setPorta(porta - 1);
    }



    function showResults(){
    console.log(50*handleTotalWidthHeight/100)
    // console.log({
    //     '0.5L': latasDeTinta/0.5,
    //     '2.5L': latasDeTinta/2.5,
    //     '3.6L': latasDeTinta/3.6,
    //     '18L': latasDeTinta/18
    // })  
    }



    return (
        <div className="wall">
       
            <h1>Parede 1</h1>
        {handleTotalWidthHeight>15 && <WarningMessage message="Medida máxima permitida: 15 ⚠️"/>}
        <span>Medidas atuais: {handleTotalWidthHeight}m²</span>
            <label htmlFor="altura">Altura</label>
            <div className="inputItems">
                <button onClick={decrementHeight}><Minus size={20} /></button>
                <input
                    name="altura"
                    type="number"
                    value={handleValueHeight}
                    max="15"
                    onChange={(item) => setHandleValueHeight(item.target.value)}
                    placeholder="Altura"
                    disabled
                />
                <button onClick={incrementHeight}><Plus size={20} /></button></div>
            <label htmlFor="largura">Largura</label>
            <div className="inputItems">
                <button onClick={decrementWidth}><Minus size={20} /></button>
                <input
                    name="largura"
                    type="number"
                    value={handleValueWidth}
                    min="0"
                    max="15"
                    onChange={(item) => setHandleValueWidth(item.target.value)}
                    placeholder="Largura"
                    disabled
                />
                <button onClick={incrementWidth}><Plus size={20} /></button>
            </div>
            <div className={handleValueHeight > 0 && handleValueWidth > 0 ? 'doorsWindows' : 'doorsWindowsHide'}>
                <span>espaço: {handleFinalResult/2}</span>
                <h3>Janelas</h3>
                <div className="inputItems">
                    <button onClick={decrementWindow}><Minus size={20} /></button>
                    <input
                        name="largura"
                        type="number"
                        value={janela}
                        onChange={(item) => setHandleValueWindows(item.target.value)}
                        min="0"
                        max="15"
                        placeholder="Janelas"
                        disabled
                    />
                    <button onClick={incrementWindow}><Plus size={20} /></button>
                </div>
                <h3>Portas</h3>
                <div className="inputItems">
                    <button onClick={decrementDoors}><Minus size={20} /></button>
                    <input
                        name="largura"
                        type="number"
                        value={porta}
                        onChange={(item) => setHandleValueDoors(item.target.value)}
                        min="0"
                        max="15"
                        placeholder="Portas"
                        disabled
                    />
                    <button onClick={incrementDoors}><Plus size={20} /></button>
                </div>
                <button onClick={showResults}>Alertar</button>
            </div>

        </div>
    )
}