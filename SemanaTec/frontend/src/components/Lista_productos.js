import { BsFillCartPlusFill } from 'react-icons/bs';
import React, {useState} from 'react'
import "./Components_styles.css";




function Lista_productos(props) {
    
    const [carrito, setCarrito] = useState([]);
    
    // Función para agregar un producto al carrito
    const agregarAlCarrito = (product) => {
        // Clonamos el arreglo de carrito y agregamos el nuevo producto
        const nuevoCarrito = [...carrito, product];
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
                            {props.results.map((product) =>(
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            src={product.images[0]} // Muestra la primera imagen de la matriz 'images'
                                            className="rounded mx-auto img-fluid img-size"
                                            alt={`Imagen del producto ${product.title}`}
                                        />
                                    </td>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>
                                    <button
                                        onClick={() => {
                                            agregarAlCarrito(product);
                                        }}
                                        type="button"
                                        className="btn btn-primary btn-sm boton-agg">
                                        <BsFillCartPlusFill size="1rem" />
                                    </button>

                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
    </div>
  )
}


export default Lista_productos;

