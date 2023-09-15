import React, { useState } from 'react';
import axios from 'axios';
import './agregar_styles.css'
import {IoMdAddCircleOutline} from 'react-icons/io';



function AgregarProducto() {
  //const [product, setProduct] = useState('');
  //const [precio, setPrecio] = useState('');
  //const [img, setImage] = useState('');
  const [Producto, setProduct] = useState('');
  const [Precio, setPrecio] = useState('');
  const [Imagen, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Realiza la solicitud POST a la API aquí con los datos ingresados (nombre, precio, imagen).
    // Puedes usar Axios u otra biblioteca para realizar la solicitud.
    const nuevoProducto = { Producto, Precio, Imagen };
    console.log(nuevoProducto);
    try {
        const response = await axios.post('http://localhost:8000/agregardatos', nuevoProducto, {
          headers: {
            'Content-Type': 'application/json', // Establece el tipo de contenido correcto
          },
        });
    
        if (response.status === 200) {
          // Maneja la respuesta exitosa aquí, por ejemplo, mostrando un mensaje de éxito.
          console.log('Producto agregado con éxito');
          setProduct('');
          setPrecio('');
          setImage('');
        } else {
          // Maneja la respuesta en caso de error.
          console.error('Error al agregar el producto');
        }
      } catch (error) {
        console.error('Error en la solicitud POST:', error);
      }
  };

  return (
    <div>

      <div className='agregar grid text-center'>

        <h1 className='title'>Agregar Nuevo Producto</h1>

        <form onSubmit={handleSubmit}>

          <div className='card-container'>

            <div class="card mb-3" >

              <div class="row g-0">
                <div class="col-md-4">
                <img
                    src={Imagen || 'https://cdn.icon-icons.com/icons2/564/PNG/512/Add_Image_icon-icons.com_54218.png'}
                    className='img-fluid rounded-start'
                    alt='Imagen del producto'
                  />
                </div>

                <div class="col-md-8">

                  <div class="card-body">

                    <div class="mb-3 text-start">
                      <label htmlFor="nombre" class="form-label">Nombre</label>
                      <input type="text" class="form-control" id="nombre" 
                        placeholder="Nombre del producto"
                        value={Producto}
                        onChange={(e) => setProduct(e.target.value)}
                        required/>
                    </div>

                    <div class="mb-3 text-start">
                      <label htmlFor="precio" class="form-label">Precio</label>
                      <input 
                        type = "number" 
                        class = "form-control" 
                        id = "precio" 
                        placeholder = "Precio del producto"
                        value = {Precio}
                        onChange = {(e) => setPrecio(e.target.value)}
                        required/>
                    </div>

                    <div class="mb-3 text-start">
                      <label htmlFor="imagen" class="form-label">URL de la Imagen</label>
                      <input 
                        type = "text" 
                        class = "form-control" 
                        id = "imagen" 
                        placeholder = "Direccion de la imagen"
                        value = {Imagen}
                        onChange={(e) => setImage(e.target.value)}
                        required/>
                    </div>
                    


                    <button class="btn btn-primary" type="submit"><IoMdAddCircleOutline/>Agregar Producto</button>
                  </div>

                </div>
              </div>

            </div>


          </div>

        </form>
      </div>
    </div>
  );
}

export default AgregarProducto;