import { createContext, useState } from "react";
import { Walls } from '../../tipagens/tipagens';



export const SecondWall = createContext({} as Walls);

function WallTwoProvider({ children }: any) {

    const [handleValueHeight, setHandleValueHeight] = useState<any>(0);
    const [handleValueWidth, setHandleValueWidth] = useState<any>(0);
    const [handleValueWindows, setHandleValueWindows] = useState<any>(0);
    const [handleValueDoors, setHandleValueDoors] = useState<any>(0);
    const [windowAmount, setWindowAmount] = useState<any>(0);
    const [doorAmount, setDoorAmount] = useState<any>(0);
   

    return (
        <SecondWall.Provider value={{ 
            handleValueHeight, 
            setHandleValueHeight,
            handleValueWidth, setHandleValueWidth,
            handleValueWindows, setHandleValueWindows,
            handleValueDoors, setHandleValueDoors,
            windowAmount, setWindowAmount,
            doorAmount, setDoorAmount,

         }}>
            {children}
        </SecondWall.Provider>
    )
}



export default WallTwoProvider 