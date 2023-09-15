import React, {useState, useEffect} from 'react'
import "./Components_styles.css";
import { BsFillCartCheckFill } from 'react-icons/bs';
import Lista_Carro from '../Carrito/Lista_Carro';
import Lista_productos from './Lista_productos';
import AgregarProducto from '../Agregar Productos/Agregar_Producto';



const Barra_busqueda = () => {
    // Declaramos los hooks
    const [products, setProducts] = useState([])
    const [buscar, setBuscar] = useState("")
    const [carrito, setCarrito] = useState([]); // Estado del carrito

    // Datos de la API
    const ruta = 'https://api.escuelajs.co/api/v1/products'
    //const ruta = 'http://localhost:8000/leerdatos'
    
    const showData = async () =>{
        const response = await fetch(ruta)
        const data = await response.json()
        //console.log(data)
        setProducts(data)
        console.log('Datos de productos:', data); // Agrega este console.log para verificar los datos que obtienes de la API.
        
    }

    //Para buscar
    const buscador = (e) =>{
        setBuscar(e.target.value)
        console.log('Valor de búsqueda:', e.target.value); // Agrega este console.log para verificar si el valor de búsqueda se actualiza correctamente.
    }

    //Limpiar Consola
    function deleteProduct(){
        //console.clear();
        setCarrito([]);
        
    }

    //Filtrar busqueda
    let results = [];
    if(!buscar){
        results = products;
    }else{
        results = products.filter((producto) =>
        producto.product.toLowerCase().includes(buscar.toLowerCase())
        )
        console.log('Resultados de la búsqueda:', results); // Agrega este console.log para verificar los resultados de la búsqueda.
    }

    useEffect(() => {
        showData() 
    },[])
    /*useEffect(() => {
        // Llama a tu endpoint '/leerdatos' aquí para obtener los datos
        fetch('http://localhost:8000/leerdatos')
          .then((response) => response.json())
          .then((data) => {
            // Almacena los datos en el estado 'productos'
            setProducts(data);
          })
          .catch((error) => {
            console.error('Error al obtener datos:', error);
          });
      }, []);*/
    

  return (
    <div>
        <div>

            {/*<div className='col container-lista'>
                <h2 className='text-font col'><BsFillCartCheckFill size = '2rem'/> Tu carrito</h2>
                <div className='carrito table-container'>
                    <Lista_Carro carrito={carrito} setCarrito={setCarrito}/>
                </div>
  </div>*/}

            <div >

                <div className='container-gen'>

                <div className='barra col self-align-center'>
                    <input value={buscar} onChange={buscador}
                    type='text' placeholder='Buscar' className='form-control'/>
                </div>

                <div className='table-container col self-align-center'>
                <Lista_productos
                    carrito={carrito} // Pasa el carrito como prop a Lista_Productos
                    setCarrito={setCarrito} // Pasa la función para actualizar el carrito
                    products={results} // Pasamos results como prop en lugar de products
                />
                </div>  


                <div className='col self-align-center'>
                    <button onClick={deleteProduct} type="button" className="btn btn-danger boton-limpiar">
                    Limpiar seleccion
                    </button>
                </div>




                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Barra_busqueda
