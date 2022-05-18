import { createContext, useState, useContext } from "react";
import { Walls } from '../../tipagens/tipagens';
import { GlobalContext } from '../valoresTotais';



export const ThirtWall = createContext({} as Walls);

function WallThreeProvider({ children }: any) {

    const [handleValueHeight, setHandleValueHeight] = useState<any>(0);
    const [handleValueWidth, setHandleValueWidth] = useState<any>(0);
    const [handleValueWindows, setHandleValueWindows] = useState<any>(0);
    const [handleValueDoors, setHandleValueDoors] = useState<any>(0);
    const [windowAmount, setWindowAmount] = useState<any>(0);
    const [doorAmount, setDoorAmount] = useState<any>(0);
   

    return (
        <ThirtWall.Provider value={{ 
            handleValueHeight, 
            setHandleValueHeight,
            handleValueWidth, setHandleValueWidth,
            handleValueWindows, setHandleValueWindows,
            handleValueDoors, setHandleValueDoors,
            windowAmount, setWindowAmount,
            doorAmount, setDoorAmount,

         }}>
            {children}
        </ThirtWall.Provider>
    )
}



export default WallThreeProvider 