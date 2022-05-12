import { createContext, useState } from "react";




interface ContextProps {
    altura: number;
    setAltura: (value: number) => void;
    largura: number;
    setLargura: (value: number) => void;
    janela: number;
    setJanela: (value: number) => void;
    porta: number;
    setPorta: (value: number) => void;

}


export const CountContext = createContext({} as ContextProps);

function CountProvider({ children }: any) {

    const [janela, setJanela] = useState<any>(0);
    const [porta, setPorta] = useState<any>(0);
    const [altura, setAltura] = useState<any>(0)
    const [largura, setLargura] = useState<any>(0)

    return (
        <CountContext.Provider value={{ altura, setAltura, largura, setLargura, janela, setJanela, porta, setPorta }}>
            {children}
        </CountContext.Provider>
    )
}



export default CountProvider 