import React, {useState} from 'react'
import { BsCartDashFill } from 'react-icons/bs';
import './carrito_styles.css'


function Lista_Carro() {
  
  const [carrito, setCarrito] = useState([
    {
      id: 1,
      product: 'Producto de Prueba 1',
      price: 20.0,
      img: 'https://hebmx.vtexassets.com/arquivos/ids/580280-800-800?v=638297725328530000&width=800&height=800&aspect=true',
    },
    {
      id: 2,
      product: 'Producto de Prueba 2',
      price: 15.0,
      img: 'https://hebmx.vtexassets.com/arquivos/ids/580280-800-800?v=638297725328530000&width=800&height=800&aspect=true',
    },
    {
      id: 3,
      product: 'Producto de Prueba 3',
      price: 25.0,
      img: 'https://hebmx.vtexassets.com/arquivos/ids/786506-800-800?v=638243499429300000&width=800&height=800&aspect=true',
    },
    {
      id: 4,
      product: 'Producto de Prueba 1',
      price: 20.0,
      img: 'https://hebmx.vtexassets.com/arquivos/ids/580280-800-800?v=638297725328530000&width=800&height=800&aspect=true',
    },
    {
      id: 5,
      product: 'Producto de Prueba 1',
      price: 20.0,
      img: 'https://hebmx.vtexassets.com/arquivos/ids/580280-800-800?v=638297725328530000&width=800&height=800&aspect=true',
    },
    {
      id: 6,
      product: 'Producto de Prueba 1',
      price: 20.0,
      img: 'https://hebmx.vtexassets.com/arquivos/ids/786506-800-800?v=638243499429300000&width=800&height=800&aspect=true',
    },
    {
      id: 7,
      product: 'Producto de Prueba 1',
      price: 20.0,
      img: 'https://hebmx.vtexassets.com/arquivos/ids/580280-800-800?v=638297725328530000&width=800&height=800&aspect=true',
    },
  ]); // Estado del carrito

  

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

        {/*<table className="table table-light table-striped table-responsive-sm">
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
            <p>Total: ${calcularPrecioTotal()}</p> {/* Muestra la suma total 
        </div>*/}


      

        <h1 className='title text-center'>Tu Carrito</h1>

      <div className='row'>


        <div className='col align-self-end '>

          <div className='container-products'>
            {carrito.map((product) => (
              <div class="card" key={product.id}>
                <img src={product.img} class="card-img-top image-product" alt={`Imagen del producto ${product.img}`} />
                <div class="card-body">
                  <p class="card-text">{product.product}</p>
                  <p class="card-text">${product.price}</p>
                  <button type="button" className="btn btn-danger btn-sm boton-agg" onClick={() => eliminarDelCarrito(product.id)}>
                    <BsCartDashFill size="1rem" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
        
        <div className='container-precio col'>
          <div className='total'>
              <p>Total</p>
              <p>${calcularPrecioTotal()}</p> {/* Muestra la suma total */}
          </div>
        </div>

      </div>
        

      </div>
    );
  }
  

export default Lista_Carro;
