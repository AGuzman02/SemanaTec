import React, { useState } from 'react';
import axios from 'axios';


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
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={Producto}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            value={Precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imagen">URL de la Imagen:</label>
          <input
            type="text"
            id="imagen"
            value={Imagen}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default AgregarProducto;
