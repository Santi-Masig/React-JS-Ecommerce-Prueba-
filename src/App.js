import "./App.scss";

import Examples from "./components/Examples";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

//Componente app
function App() {
  return (
    <>
      {/* <Examples /> */}
      <NavBar />
      <ItemListContainer />

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
