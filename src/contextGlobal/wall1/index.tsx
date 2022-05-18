import { createContext, useState } from "react";
import { Walls } from '../../tipagens/tipagens';



export const FirstWall = createContext({} as Walls);

function WallOneProvider({ children }: any) {

    const [handleValueHeight, setHandleValueHeight] = useState<any>(0);
    const [handleValueWidth, setHandleValueWidth] = useState<any>(0);
    const [handleValueWindows, setHandleValueWindows] = useState<any>(0);
    const [handleValueDoors, setHandleValueDoors] = useState<any>(0);
    const [windowAmount, setWindowAmount] = useState<any>(0);
    const [doorAmount, setDoorAmount] = useState<any>(0);
   

    return (
        <FirstWall.Provider value={{ 
            handleValueHeight, 
            setHandleValueHeight,
            handleValueWidth, setHandleValueWidth,
            handleValueWindows, setHandleValueWindows,
            handleValueDoors, setHandleValueDoors,
            windowAmount, setWindowAmount,
            doorAmount, setDoorAmount,

         }}>
            {children}
        </FirstWall.Provider>
    )
}



export default WallOneProvider 