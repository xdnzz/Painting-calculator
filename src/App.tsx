
import './global.css';
import { MeasuresFirst } from './components/measures/wall1';
import { MeasuresSecond } from './components/measures/wall2';
import { MeasuresThirt } from './components/measures/wall3';
import { MeasuresFourth } from './components/measures/wall4';
import  CountContext  from './contexts/total';


function App() {

  return (
    <main className="container">
      <CountContext>
        <MeasuresFirst />
        <MeasuresSecond />
        <MeasuresThirt />
        <MeasuresFourth />
      </CountContext>

    </main>
  )
}

export default App
