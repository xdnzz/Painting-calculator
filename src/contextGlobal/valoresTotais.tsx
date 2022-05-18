import { createContext, useState } from "react";
import { ContextProps } from '../tipagens/tipagens'



export const GlobalContext = createContext({} as ContextProps);

function GlobalContextProvider({ children }: any) {
    const [alturaParede1, setAlturaParede1] = useState<any>(0);
    const [espaçoDisponivelParede1, setEspaçoDisponivelParede1] = useState<any>(0);
    const [espaçoDisponivelParede2, setEspaçoDisponivelParede2] = useState<any>(0);
    const [espaçoDisponivelParede3, setEspaçoDisponivelParede3] = useState<any>(0);
    const [espaçoDisponivelParede4, setEspaçoDisponivelParede4] = useState<any>(0);
    const [alturaParede2, setAlturaParede2] = useState<any>(0);
    const [alturaParede3, setAlturaParede3] = useState<any>(0);
    const [alturaParede4, setAlturaParede4] = useState<any>(0);
    const [largura, setLargura] = useState<any>(0);
    const [janela, setJanela] = useState<any>(0);
    const [porta, setPorta] = useState<any>(0);

    const [medidasGlobais, setMedidasGlobais] = useState<any>(0)

    return (
        <GlobalContext.Provider value={
            {
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
            }}>
            {children}
        </GlobalContext.Provider>
    )
}



export default GlobalContextProvider 