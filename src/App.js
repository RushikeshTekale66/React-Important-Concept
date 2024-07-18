import './App.css';
import Cart from './Component/cart';
import Item from './Component/item';


function App() {

  return (
    <div className="App">
      <h1>useContext</h1>
       <Item name ="Laptop" price ={100}/>
       <Item name ="Mobile" price ={10}/>
       <Item name ="Bike" price ={1000}/>
       <Cart/>
    </div>
  );
}

export default App;
