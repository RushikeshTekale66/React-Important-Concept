import './App.css';
import Props from './Component/Props'

function App() {
  const state = "Maharashtra";
  let bike = {
    company:"Bajaj",
    model:"Pulser",
    price:1.5
  }
  return (
    <div className="App">
      <Props name = "Rushikesh" lname = "Tekale" state = {state} company = {bike}/>
    </div>
  );
}

export default App;
