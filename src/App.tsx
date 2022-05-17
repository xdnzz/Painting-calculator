
import './global.css';
import { MeasuresFirst } from './components/measures/wall1';
import { MeasuresSecond } from './components/measures/wall2';
import { MeasuresThirt } from './components/measures/wall3';
import { MeasuresFourth } from './components/measures/wall4';
import GlobalContextProvider from './contextGlobal/valoresTotais';
import WallOneProvider from './contextGlobal/wall1';
import WallTwoProvider from './contextGlobal/wall2';
import WallThreeProvider from './contextGlobal/wall3';
import WallFourthProvider from './contextGlobal/wall4';


function App() {

  return (
    <main className="container">
      <GlobalContextProvider>

        <WallOneProvider>
          <MeasuresFirst />
        </WallOneProvider>

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
