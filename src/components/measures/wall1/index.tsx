import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../contextGlobal/valoresTotais';
import { FirstWall } from '../../../contextGlobal/wall1'
import { Plus, Minus } from "phosphor-react";
import { WarningMessage } from '../../warning/Index'
import { Walls } from '../../../tipagens/tipagens';
import '../globalstyle/style.css';

export function MeasuresFirst() {
    const {
        alturaParede1,
        setAlturaParede1,
        largura,
        setLargura,
        janela,
        setJanela,
        porta,
        setPorta,
        setMedidasGlobais,
        setEspaçoDisponivelParede1,
        espaçoDisponivelParede1
    } = useContext(GlobalContext);

    const {
        handleValueHeight,
        setHandleValueHeight,
        handleValueWidth,
        setHandleValueWidth,
        handleValueWindows,
        setHandleValueWindows,
        handleValueDoors,
        setHandleValueDoors,
        windowAmount,
        setWindowAmount,
        doorAmount,
        setDoorAmount,

    } = useContext<Walls>(FirstWall);

    const totalMedidas = {
        totalAlturaLargura: handleValueHeight * handleValueWidth,
        totalPortaJanela: handleValueWindows + handleValueDoors,
    }

    var availableSpace = 50 * totalMedidas.totalAlturaLargura / 100 - totalMedidas.totalPortaJanela;



    function incrementHeight() {
        if(totalMedidas.totalAlturaLargura >= 15) return
        setHandleValueHeight(handleValueHeight + 1);
    }

    function decrementHeight() {
        if (handleValueHeight === 0) return;
        setHandleValueHeight(handleValueHeight - 1);
    }

    function incrementWidth() {
        if(totalMedidas.totalAlturaLargura >= 15) return
        setHandleValueWidth(handleValueWidth + 1);
        setLargura(largura + 1)
    }

    function decrementWidth() {
        if (handleValueWidth === 0) return;
        setHandleValueWidth(handleValueWidth - 1);
        setLargura(largura - 1)
    }


    function incrementWindow() {
        setHandleValueWindows(handleValueWindows + 2.4);
        setWindowAmount(windowAmount + 1)
        setJanela(janela + 1);
    }

    function decrementWindow() {
        if (windowAmount === 0) return;
        setHandleValueWindows(handleValueWindows - 2.4);
        setWindowAmount(windowAmount - 1)
        setJanela(janela - 1);
    }

    function incrementDoors() {
        if (availableSpace < 2.2) {
            alert('Tamanho da parede insuficiente para adicionar uma porta');
            return;
        }
        setDoorAmount(doorAmount + 1)
        setHandleValueDoors(handleValueDoors + 1.5);
        setPorta(porta + 1);

    }

    function decrementDoors() {

        if (handleValueDoors === 0) return;
        setDoorAmount(doorAmount - 1)
        setHandleValueDoors(handleValueDoors - 1.5);
        setPorta(porta - 1);
    }


    useEffect(() => {
        
        
        setMedidasGlobais(totalMedidas.totalAlturaLargura - totalMedidas.totalPortaJanela);
        setEspaçoDisponivelParede1(50 * totalMedidas.totalAlturaLargura / 100 - totalMedidas.totalPortaJanela);
        setAlturaParede1(totalMedidas.totalAlturaLargura - totalMedidas.totalPortaJanela)
    }, [handleValueHeight, handleValueWidth, handleValueDoors, handleValueWindows])


    // function showResults() {
    //     console.log(80 * 1000 / 100)
    //     console.log(50 * handleTotalWidthHeight / 100)
    //     console.log({
    //         '0.5L': (latasDeTinta / 0.5).toFixed(1),
    //         '2.5L': (latasDeTinta / 2.5).toFixed(1),
    //         '3.6L': (latasDeTinta / 3.6).toFixed(1),
    //         '18L': (latasDeTinta / 18).toFixed(1)
    //     })
    // }

  


    return (

        <div className="wall">
            <h1>Parede 1</h1>  restante {alturaParede1.toFixed(1)}
            {totalMedidas.totalAlturaLargura > 15 && <WarningMessage message="Medida máxima permitida: 15 ⚠️" />}
            <span>Medidas atuais: {totalMedidas.totalAlturaLargura}m²</span>
            <label htmlFor="altura">Altura</label>
            <div className="inputItems">
                <button onClick={decrementHeight}><Minus size={20} /></button>
                <input
                    name="altura"
                    type="number"
                    value={handleValueHeight}
                    min="1"
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
                    min="1"
                    max="15"
                    onChange={(item) => setHandleValueWidth(item.target.value)}
                    placeholder="Largura"
                    disabled
                />
                <button onClick={incrementWidth}><Plus size={20} /></button>
            </div>
            <div className='doorsWindows'>

                {espaçoDisponivelParede1 > 0 ? <span>Espaço disponível {espaçoDisponivelParede1.toFixed(1)}m²</span> : <WarningMessage message="Espaço insuficiente p/ janelas/portas" />}
                <h3>Janelas</h3>
                
                <div className="inputItems">
                    <button onClick={decrementWindow}><Minus size={20} /></button>
                    <input
                        name="largura"
                        type="number"
                        value={windowAmount}
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
                        value={doorAmount}
                        onChange={(item) => setHandleValueDoors(item.target.value)}
                        min="0"
                        max="15"
                        placeholder="Portas"
                        disabled
                    />
                    <button onClick={incrementDoors}><Plus size={20} /></button>
                </div>
            </div>

        </div>

    )
}