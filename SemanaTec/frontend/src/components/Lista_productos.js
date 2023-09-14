import { BsFillCartPlusFill } from 'react-icons/bs';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Components_styles.css";



function Lista_productos({ carrito, setCarrito, products }) {
    
    //const [carrito, setCarrito] = useState([]);
    //const [productos, setProductos] = useState([]);



  /*useEffect(() => {
    console.log(productos);
      fetchProductos();
    
  }, []);

  const getProductos = `http://localhost:8000/leerdatos`;


  const fetchProductos = async () => {
    try {
      const rotacionesResponse = await axios.get(getProductos);
      setProductos(rotacionesResponse.data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };*/
    
    // Función para agregar un producto al carrito
    const agregarAlCarrito = (productId) => {
        // Clonamos el arreglo de carrito y agregamos el nuevo producto
        const productToAdd = products.find((product) => product.id === productId);
        const nuevoCarrito = [...carrito, productToAdd];
        setCarrito(nuevoCarrito);

        console.log(nuevoCarrito)

    };
    

    return (
        <div>
          <table className="table table-light table-striped table-responsive-sm">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
      
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={product.img} // Ruta a la imagen del producto
                      className="rounded mx-auto img-fluid img-size"
                      alt={`Imagen del producto ${product.img}`}
                    />
                  </td>
                  <td>{product.product}</td>
                  <td>${product.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        agregarAlCarrito(product.id);
                      }}
                      type="button"
                      className="btn btn-primary btn-sm boton-agg"
                    >
                      <BsFillCartPlusFill size="1rem" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      
}
export const carrito = [];
export default Lista_productos;

