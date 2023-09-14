import React, {useState} from 'react'
import { BsCartDashFill } from 'react-icons/bs';

import "./Barra_busqueda_styles.css";
//import "./Components_styles.css";


/*function Lista_Carro({carrito}) {
    
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
                                
                                    <tr>
                                        <td>
                                            <img
                                                src="https://hebmx.vtexassets.com/arquivos/ids/580280-800-800?v=638297725328530000&width=800&height=800&aspect=true"
                                                className="rounded mx-auto img-fluid img-size"
                                                alt="Iamgen Bacardi"
                                            />
                                        </td>
                                        <td>Bacardi</td>
                                        <td>$599.01</td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm boton-agg"><BsCartDashFill size = '1rem'/></button>
                                            
                                        </td>

                                    </tr>

                                    <tr>
                                        <td>
                                            <img
                                                src="https://hebmx.vtexassets.com/arquivos/ids/711781-800-800?v=638218749956930000&width=800&height=800&aspect=true"
                                                className="rounded mx-auto img-fluid img-size"
                                                alt="Iamgen Bacardi"
                                            />
                                        </td>
                                        <td>Carajillo</td>
                                        <td>$82.0</td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm boton-agg"><BsCartDashFill size = '1rem'/></button>
                                            
                                        </td>

                                    </tr>
   
                            </tbody>
                        </table>
    </div>
  )
}*/
function Lista_Carro({ carrito, setCarrito}) {
    console.log('si esta entrando a carrito');
    console.log(carrito);
    // Función para eliminar un producto del carrito
    const eliminarDelCarrito = (productId) => {
        const nuevoCarrito = carrito.filter((product) => product.id !== productId);
        setCarrito(nuevoCarrito);
    };
    // Función para calcular la suma total del precio
    const calcularPrecioTotal = () => {
        let total = 0;
        carrito.forEach((product) => {
        total += product.price;
        });
        return total;
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
            {carrito.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.img}
                    className="rounded mx-auto img-fluid img-size"
                    alt={`Imagen del producto ${product.img}`}
                  />
                </td>
                <td>{product.product}</td>
                <td>${product.price}</td>
                <td>
                  <button type="button" className="btn btn-danger btn-sm boton-agg" onClick={() => eliminarDelCarrito(product.id)}>
                    <BsCartDashFill size="1rem" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
            <p>Total: ${calcularPrecioTotal()}</p> {/* Muestra la suma total */}
        </div>
      </div>
    );
  }
  

export default Lista_Carro;
