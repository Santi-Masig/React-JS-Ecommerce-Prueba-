
import "./App.css";


import Button from "./components/button/Button";
import Examples from "./components/Examples";




function App() {
  return (
    <>
    <Examples />
    <Button text="Boton A" color="blue" />
    <Button text="Boton B" color="indigo" />
    <Button text="Boton ultimo" />
    {/* Button(Hola Corder) */}
    </>
  );
}


export default App;
