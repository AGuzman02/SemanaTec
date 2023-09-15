import Barra_busqueda from './components/Productos/Barra_busqueda';
import Navbar from './components/Navbar/Navbar';
import fondo from './components/Imagenes/fondo.png'
import '../src/App.css'
import BackgroundImage from './components/BackroundImage';
import { Navigate,BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AgregarProducto from './components/Agregar Productos/Agregar_Producto';
import Lista_Carro from './components/Carrito/Lista_Carro';



function App() {
  const imageUrl = fondo;
  return (
  
    <div className="App">
      
      <BackgroundImage imageUrl={imageUrl}>
        <Router> 
          <Navbar />
            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/productos_disponibles" element={<Barra_busqueda />} />
              <Route path="/agregar_productos" element={<AgregarProducto />} />
              <Route path="/carrito" element={<Lista_Carro />} />
              
            </Routes>
        </Router>
        
      </BackgroundImage>
      
    </div>
   
  );
}

export default App;
