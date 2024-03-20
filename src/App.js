import './App.css';
import GetDataFromAPI from './Component/GetDataFromAPI';
import PostDataToDatabase from './Component/PostDataToDatabase'

function App() {
  
  return (
    <div className="App">
      <h1>Get data from API</h1>
      <GetDataFromAPI/>
      <h1>Post data to API</h1>
      <PostDataToDatabase/>
    </div>
  );
}

export default App;
