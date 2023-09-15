import Barra_busqueda from './components/Productos/Barra_busqueda';
import Navbar from './components/Navbar/Navbar';
import fondo from './components/Imagenes/fondo.png'
import '../src/App.css'
import BackgroundImage from './components/BackroundImage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './components/Home';
import AgregarProducto from './components/Agregar Productos/Agregar_Producto';
import Lista_Carro from './components/Carrito/Lista_Carro';



function App() {
  const imageUrl = fondo;
  return (
  
    <div className="App">
      
      <BackgroundImage imageUrl={imageUrl}>
        <Router> {/* Envuelve toda la aplicación con el Router */}
          <Navbar />
            <Routes> {/* Utiliza Routes para renderizar solo una ruta a la vez */}
              <Route path="/Home" element={<Home />} />
              <Route path="/productos_disponibles" element={<Barra_busqueda />} />
              <Route path="/agregar_productos" element={<AgregarProducto />} />
              <Route path="/carrito" element={<Lista_Carro />} />
              
              {/* Agrega más rutas según sea necesario */}
            </Routes>
        </Router>
        
      </BackgroundImage>
      
    </div>
   
  );
}

export default App;
