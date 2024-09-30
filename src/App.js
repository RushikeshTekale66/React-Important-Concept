import Props from "./Component/Props";

const App = () => {
  const city = "Pune";
  const state = {
    name: "Rushikesh",
    lname: "Tekale"
  }
  return (
    <>
      <h1>Hi Rushikesh Tekale</h1>
      <Props name={state.name} lname={state.lname} city={city} like="Coding" />
    </>
  )
}

export default App;