export interface ContextProps {
    alturaParede1: number;
    setAlturaParede1: (value: number) => void;
    alturaParede2: number;
    setAlturaParede2: (value: number) => void;
    alturaParede3: number;
    setAlturaParede3: (value: number) => void;
    alturaParede4: number;
    setAlturaParede4: (value: number) => void;
    largura: number;
    setLargura: (value: number) => void;
    janela: number;
    setJanela: (value: number) => void;
    porta: number;
    setPorta: (value: number) => void;
    medidasGlobais: number;
    setMedidasGlobais: (value: number) => void;
    espaçoDisponivelParede1: number;
    setEspaçoDisponivelParede1:(value: number) => void;
    espaçoDisponivelParede2: number;
    setEspaçoDisponivelParede2: (value: number) => void;
    espaçoDisponivelParede3: number;
    setEspaçoDisponivelParede3: (value: number) => void;
    espaçoDisponivelParede4: number;
    setEspaçoDisponivelParede4: (value: number) => void;
}


export interface Walls {
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