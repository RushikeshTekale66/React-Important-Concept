import './App.css';
import { useContext } from 'react';
import Counter from './Component/Counter';
import {ConterContext} from "./Context/Counter"

function App() {
  //we can get the context & use the value of it
  const conterState = useContext(ConterContext);

  return (
    <div className="App">
       <h1>{conterState.count}</h1>
       <Counter/>
       <Counter/>
       <Counter/>
       <Counter/>
    </div>
  );
}

export default App;
