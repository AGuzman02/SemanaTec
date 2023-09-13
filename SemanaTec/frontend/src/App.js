import Barra_busqueda from './components/Barra_busqueda';
import price from './components/price.png'
import '../src/App.css'


function App() {
  return (
  
    <div className="App">

      <img className = 'logo' src={price}/>
      <Barra_busqueda/>
      
    </div>
   
  );
}

export default App;
