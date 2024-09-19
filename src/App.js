import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(1);

  let multiplication = count * 5;

  let multiplybyfive = ()=>{
        setCount(count+1)
  }

  return (
    <div className="App">
        <h1>Main Count {count}</h1>
        <button onClick={multiplybyfive}>Click Me</button>
        <h1>Update Count {multiplication}</h1>
    </div>
  );
}

export default App;
