import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'
import Card from './components/Card/Card'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <header className="App-header">
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
          Learn React
        </a>
      </header>
      <Card
      titulo={"Selva Negra"}
      descripcion={"La tarta o torta Selva Negra es una tarta típica de la cocina de Baden y uno de los dulces más característicos de la gastronomía alemana. Está compuesta por varias capas de bizcochuelo de chocolate embebido en kirsch e intercaladas con nata y cerezas."}
      img={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Schwarzwalder_Kirschtorte.jpg/1200px-Schwarzwalder_Kirschtorte.jpg"}
      btnText={"Ver Mas"}
      />
    </div>
  );
}

export default App;
