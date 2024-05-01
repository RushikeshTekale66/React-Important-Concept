import './App.css';
import Home from './Component/NoRender';
import TrackStateChange from './Component/TrackStateChange';

function App() {

  return (
    <div className="App">
        <h1>No rerender</h1>
        <Home />
        <h1>TrackStateChange</h1>
        <TrackStateChange/>
    </div>
  );
}

export default App;
