import { createContext, useState } from "react";
import {ContextProps} from '../tipagens/tipagens'



export const GlobalContext = createContext({} as ContextProps);

function GlobalContextProvider({ children }: any) {

    const [janela, setJanela] = useState<any>(0);
    const [porta, setPorta] = useState<any>(0);
    const [altura, setAltura] = useState<any>(0);
    const [largura, setLargura] = useState<any>(0);
    const [medidasGlobais, setMedidasGlobais] = useState<any>(0)

    return (
        <GlobalContext.Provider value={{ altura, setAltura, largura, setLargura, janela, setJanela, porta, setPorta, medidasGlobais, setMedidasGlobais }}>
            {children}
        </GlobalContext.Provider>
    )
}



export default GlobalContextProvider 