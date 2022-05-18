import { GlobalContext } from '../contextGlobal/valoresTotais';
import GlobalContextProvider from '../contextGlobal/valoresTotais';
import {useContext} from 'react'

export default function Teste(){
    const {
        alturaParede3,
        setAlturaParede3,
        alturaParede4,
        setAlturaParede4,
        alturaParede2,
        setAlturaParede2,
        alturaParede1,
        setAlturaParede1,
        largura,
        setLargura,
        janela,
        setJanela,
        porta,
        setPorta,
        medidasGlobais,
        setMedidasGlobais,
        setEspaçoDisponivelParede1,
        espaçoDisponivelParede1,
        espaçoDisponivelParede2,
        setEspaçoDisponivelParede2,
        espaçoDisponivelParede3,
        setEspaçoDisponivelParede3,
        espaçoDisponivelParede4,
        setEspaçoDisponivelParede4
    
    } = useContext(GlobalContext);


    //SÓ FALTA VALIDAR OS IMPUTS DOS VALORES PRA ENTREGAR O VALOR DAS TINTAS

    return <GlobalContextProvider>
    <button onClick={()=>console.log(alturaParede1 + alturaParede2 + alturaParede3 + alturaParede4)}>MOSTRAR DADOS</button>
    </GlobalContextProvider>
}