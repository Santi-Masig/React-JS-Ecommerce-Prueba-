import logo from "../logo.svg";
function App () {

const greeting = "Bienvenidos a mi Ecommerce!";


    return (
    <section className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        { greeting + ". Otra string"}
        {"Coderhouse."}
          Learn React
        </a>
        {/* Esto es un comentario */}
      </div>
    </section>
    )
}

export default App;