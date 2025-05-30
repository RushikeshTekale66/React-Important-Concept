import './App.css';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Nav } from './Components/Nav';

const App = () => {
  
  return (
    <div className='app'>
      {/* <Nav/> */}
      <Home/>
      <About/>
    </div>
  )
}

export default App;