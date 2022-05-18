import { GlobalContext } from '../../contextGlobal/valoresTotais';
import GlobalContextProvider from '../../contextGlobal/valoresTotais';
import { useContext, useState } from 'react';
import { X } from "phosphor-react";
import './style.css';

export default function ContentWallCalculate() {

    const [modal, setModal] = useState(false)

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

    const {
        alturaParede3,
        alturaParede4,
        alturaParede2,
        alturaParede1,
        espaçoDisponivelParede1,
        espaçoDisponivelParede2,
        espaçoDisponivelParede3,
        espaçoDisponivelParede4,
    } = useContext(GlobalContext);

    const paintAmount = (alturaParede1 + alturaParede2 + alturaParede3 + alturaParede4) / 5


    function CalculateData() {
        console.log(alturaParede3)
        if (espaçoDisponivelParede4 < 0 || espaçoDisponivelParede3 < 0 || espaçoDisponivelParede2 < 0 || espaçoDisponivelParede1 < 0) {
            alert('Oops! Verifique se você tem espaço suficiente.');
            return;
        }
        setModal(!modal)

        console.log(paintAmount);
        console.log({
            '0.5L': Math.ceil(paintAmount / 0.5),
            '2.5L': Math.ceil(paintAmount / 2.5),
            '3.6L': Math.ceil(paintAmount / 3.6),
            '18L': Math.ceil(paintAmount / 18)
        })
    }

    return <GlobalContextProvider>
        {alturaParede4}
        {modal && (<main className="mainContent">
            <div className="finalResult">
                <X size={12} onClick={() => setModal(!modal)} />
                <span>Você precisará de {Math.ceil(paintAmount / 0.5)} latas de 0.5L</span>
                <span>Você precisará de {Math.ceil(paintAmount / 2.5)} latas de 5L</span>
                <span>Você precisará de {Math.ceil(paintAmount / 3.6)} latas de 3.6L</span>
                <span>Você precisará de {Math.ceil(paintAmount / 18)} latas de 18L</span>
                <span> para {paintAmount.toFixed(1)} Litros</span>
            </div>
        </main>)}
        {alturaParede4 > 0 && alturaParede3 > 0 && alturaParede2 > 0 && alturaParede1 > 0 ? <div className="btnSection">
                <button onClick={CalculateData} className="showDataBtn">Exibir dados</button>
            </div> : ''}
            

    </GlobalContextProvider>
}