import "./App.css";

import Button from "./components/button/Button";
import ButtonChild from "./components/button/Button";
import Examples from "./components/Examples";
import FlexWrapper from "./components/flexWrapper/FlexWrapper";
import Item from "./components/Item/Item";
import NavBar from "./components/navbar/NavBar";

import imgbuzo from "./assets/images/buzo.jpg";


//Componente app
function App() {
  return (
    <>
      <Examples />
      <NavBar />
      <FlexWrapper>
        <Button text="Boton A" color="blue" />
        <Button text="Boton B" color="indigo" />
        <Button text="Boton ultimo" />
        <ButtonChild>Ver detalle</ButtonChild>
      </FlexWrapper>
      <hr />
      <FlexWrapper>
        <Item
          title="Remera"
          price={400}
          detail="La mejor remera del mercado"
          img="https://piet.com.ar/wp-content/uploads/piet-remera-negra-cuadrado-blanco-01.jpg"
        />
        <Item
          title="Buzo"
          price={400}
          detail="El mejor buzo del mercado"
          img={imgbuzo}
        />
        <Item
          title="Zapatillas"
          price={200}
          detail="Las mejores zapatillas del mercado"
          img="/assets/img/zapatilla.jpg"
        />
        <Item />
      </FlexWrapper>
      {/* Button(Hola Corder) */}
    </>
  );
}

export default App;
