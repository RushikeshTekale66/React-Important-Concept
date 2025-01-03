import { Statehhook } from "./Components/Statehhook";

const App = (props) => {
  let title = props.color;
  console.log("Title color is " , title);
  
  return (
    <>
      <h1>Hi Rushikesh Tekale</h1>
      <Statehhook title = {title}/>
    </>
  )
}

export default App;