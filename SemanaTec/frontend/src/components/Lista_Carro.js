import React from 'react'
import { BsCartDashFill } from 'react-icons/bs';
import "./Barra_busqueda_styles.css";
import Carrito from './Lista_productos';

function Lista_Carro({results}) {
    
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
}

export default Lista_Carro;
