import './App.css';
import About from './Component/About';
import Home from './Component/Home';
import NoteState from './Context/NoteState';

function App() {

  return (
    <div className="App">
      <NoteState>
        <Home />
        <About />
      </NoteState>
    </div>
  );
}

export default App;
