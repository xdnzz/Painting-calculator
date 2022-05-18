

import { MeasuresFirst } from './components/measures/wall1';
import { MeasuresSecond } from './components/measures/wall2';
import { MeasuresThirt } from './components/measures/wall3';
import { MeasuresFourth } from './components/measures/wall4';
import ContentWallCalculate from './components/wallCalculate/ContentWallCalculate';
import GlobalContextProvider from './contextGlobal/valoresTotais';
import WallOneProvider from './contextGlobal/wall1';
import WallTwoProvider from './contextGlobal/wall2';
import WallThreeProvider from './contextGlobal/wall3';
import WallFourthProvider from './contextGlobal/wall4';
import './global.css';



function App() {

  return (
    <main className="container">
   
      <GlobalContextProvider>
       
        <WallOneProvider>
          <MeasuresFirst />
        </WallOneProvider>
        <ContentWallCalculate/>
        <WallTwoProvider>
          <MeasuresSecond />
        </WallTwoProvider>

        <WallThreeProvider>
          <MeasuresThirt />
        </WallThreeProvider>

        <WallFourthProvider>
          <MeasuresFourth />
        </WallFourthProvider>
        
      </GlobalContextProvider>

    </main>
  )
}

export default App
