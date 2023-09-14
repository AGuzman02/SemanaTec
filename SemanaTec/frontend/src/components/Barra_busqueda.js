import React, {useState, useEffect} from 'react'
import "./Components_styles.css";
import { BsFillCartCheckFill } from 'react-icons/bs';
import Lista_Carro from './Lista_Carro';
import Lista_productos from './Lista_productos';



const Barra_busqueda = () => {
    // Declaramos los hooks
    const [products, setProducts] = useState([])
    const [buscar, setBuscar] = useState("")
    const [carrito, setCarrito] = useState([]); // Estado del carrito

    // Datos de la API
    const URL = 'https://api.escuelajs.co/api/v1/products'
    
    const showData = async () =>{
        const response = await fetch(URL)
        const data = await response.json()
        //console.log(data)
        setProducts(data)
        
    }

    //Para buscar
    const buscador = (e) =>{
        setBuscar(e.target.value)
    }

    //Limpiar Consola
    function deleteProduct(){
        console.clear();
        
        }

    //Filtrar busqueda
    let results = []
    if(!buscar){
        results = products
    }else{
        results = products.filter((dato) =>
        dato.title.toLowerCase().includes(buscar.toLowerCase())
        )
    }

    useEffect(() => {
        showData() 
    },[])
    

  return (
    <div>
        <div className='container'>

            <div className='col container-lista'>
                <h2 className='text-font col'><BsFillCartCheckFill size = '2rem'/> Tu carrito</h2>
                <div className='carrito table-container'>
                    <Lista_Carro carrito={carrito} setCarrito={setCarrito}/>
                </div>
            </div>

            <div className='col container-products'>

                <div className='barra'>
                    <input value={buscar} onChange={buscador}
                    type='text' placeholder='Buscar' className='form-control'/>
                </div>

                <div className='table-container'>
                <Lista_productos
                    carrito={carrito} // Pasa el carrito como prop a Lista_Productos
                    setCarrito={setCarrito} // Pasa la función para actualizar el carrito
                />
                </div>

                <div className='col'>
                <button onClick={deleteProduct} type="button" className="btn btn-danger boton-limpiar">
                Limpiar seleccion
                </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Barra_busqueda
