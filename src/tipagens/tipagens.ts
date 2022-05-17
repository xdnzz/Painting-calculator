export interface ContextProps {
    altura: number;
    setAltura: (value: number) => void;
    largura: number;
    setLargura: (value: number) => void;
    janela: number;
    setJanela: (value: number) => void;
    porta: number;
    setPorta: (value: number) => void;
    medidasGlobais: number;
    setMedidasGlobais: (value: number) => void;
}


export interface WallOne {
    handleValueHeight:  number;
    setHandleValueHeight: (value: number|string) => void;
    handleValueWidth:  number;
    setHandleValueWidth: (value:  number|string) => void;
    handleValueWindows:  number;
    setHandleValueWindows: (value: number|string) => void;
    handleValueDoors:  number;
    setHandleValueDoors: (value:  number|string) => void;
    windowAmount:  number;
    setWindowAmount: (value:  number|string) => void;
    doorAmount:  number;
    setDoorAmount: (value:  number|string) => void;
}