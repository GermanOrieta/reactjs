import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'
import Card from './components/Card/Card'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navegacion from './components/Navegacion/Navegacion';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Error404 from './components/404/Error404';
import ItemDetailCointainer from './components/ItemDetailContainer/ItemDetailCointainer';



function App() {
  return (
    <div className="App">
      <Router>
        <h1>Proyecto</h1>
        <Navegacion/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error404/>}/>
          <Route path='/item/detail/:id' element={<ItemDetailCointainer/>}/>
        </Routes>
      </Router>
    {/*   <Card
      titulo={"Selva Negra"}
      descripcion={"La tarta o torta Selva Negra es una tarta típica de la cocina de Baden y uno de los dulces más característicos de la gastronomía alemana. Está compuesta por varias capas de bizcochuelo de chocolate embebido en kirsch e intercaladas con nata y cerezas."}
      img={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Schwarzwalder_Kirschtorte.jpg/1200px-Schwarzwalder_Kirschtorte.jpg"}
      btnText={"Ver Mas"}
      /> */}
    </div>
  );
}

export default App;
