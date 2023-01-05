import "./App.scss";
import Display from "./components/Display/Display";

//import Examples from "./components/Examples";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

//Componente app
function App() {
  return (
    <>
      <NavBar />
      <Display />
      <ItemListContainer />
    </>
  );
}

export default App;
