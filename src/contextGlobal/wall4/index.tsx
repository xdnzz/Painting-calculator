import { createContext, useState, useContext } from "react";
import { WallOne } from '../../tipagens/tipagens';
import { GlobalContext } from '../valoresTotais';



export const FourthWall = createContext({} as WallOne);

function WallFourthProvider({ children }: any) {

    const [handleValueHeight, setHandleValueHeight] = useState<any>(1);
    const [handleValueWidth, setHandleValueWidth] = useState<any>(1);
    const [handleValueWindows, setHandleValueWindows] = useState<any>(0);
    const [handleValueDoors, setHandleValueDoors] = useState<any>(0);
    const [windowAmount, setWindowAmount] = useState<any>(0);
    const [doorAmount, setDoorAmount] = useState<any>(0);
   

    return (
        <FourthWall.Provider value={{ 
            handleValueHeight, 
            setHandleValueHeight,
            handleValueWidth, setHandleValueWidth,
            handleValueWindows, setHandleValueWindows,
            handleValueDoors, setHandleValueDoors,
            windowAmount, setWindowAmount,
            doorAmount, setDoorAmount,

         }}>
            {children}
        </FourthWall.Provider>
    )
}



export default WallFourthProvider 