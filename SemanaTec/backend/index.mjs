import express from 'express';
import cors from 'cors';
import db from './config/config_firebase.js'; // Importa db como valor predeterminado
import { collection, getDocs, addDoc} from 'firebase/firestore';


const app=express()
app.use(express.json());
app.use(cors());
app.get('/', (req,res)=>{
  console.log(db)
  res.send('todo super cool')
})

//get de datos JEANNETTE CON MI BASE PEDORRA
/*app.get('/leerdatos', (req, res) => {
  const booksCollection = collection(db, 'productos'); // Crea una referencia a la colección 'books'
  console.log('se llamo al get');
  getDocs(booksCollection)
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          product: doc.data().product,
          price: doc.data().precio,
          img: doc.data().image
        });
      });

      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log('Error obteniendo documentos:', error);
      res.status(500).json({ mensaje: 'Error obteniendo datos' });
    });
});*/

//get de datos CON BASE DE IRAHY
app.get('/leerdatos', (req, res) => {
  const booksCollection = collection(db, 'product'); // Crea una referencia a la colección 'books'
  console.log('se llamo al get');
  getDocs(booksCollection)
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          product: doc.data().Producto,
          price: doc.data().Precio,
          img: doc.data().Imagen
        });
      });

      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log('Error obteniendo documentos:', error);
      res.status(500).json({ mensaje: 'Error obteniendo datos' });
    });
});

//agregar datos con la base de jeannette
/*app.post('/agregardatos', async (req, res) => {
  try {
    // Obtén los datos del cuerpo de la solicitud
    const { product, precio, img } = req.body;
    // Crea un objeto con los datos del producto
    const nuevoProducto = {
      product,
      precio,
      img // Asegúrate de que coincida con el nombre del campo en tu base de datos
    };

    const docRef = await addDoc(collection(db, 'productos'), nuevoProducto);
    console.log('Producto agregado con ID:', docRef.id);

    res.status(200).json({ mensaje: 'Producto agregado correctamente', productId: docRef.id });
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    res.status(500).json({ error: 'Ocurrió un error al agregar el producto' });
  }
});*/

app.post('/agregardatos', async (req, res) => {
  try {
    // Obtén los datos del cuerpo de la solicitud
    const { Producto, Precio, Imagen } = req.body;
    // Crea un objeto con los datos del producto
    const nuevoProducto = {
      Producto,
      Precio,
      Imagen // Asegúrate de que coincida con el nombre del campo en tu base de datos
    };

    const docRef = await addDoc(collection(db, 'product'), nuevoProducto);
    console.log('Producto agregado con ID:', docRef.id);

    res.status(200).json({ mensaje: 'Producto agregado correctamente', productId: docRef.id });
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    res.status(500).json({ error: 'Ocurrió un error al agregar el producto' });
  }
});


app.delete('/borrar-dato/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Referencia al documento que deseas borrar
    const dataRef = doc(db, 'books', id);

    // Borra el documento
    await deleteDoc(dataRef);

    res.json({ mensaje: 'Documento eliminado correctamente' });
  } catch (error) {
    console.error('Error al borrar el documento:', error);
    res.status(500).json({ mensaje: 'Error al borrar el documento' });
  }
});



app.listen('8000', (req, res)=>{
  console.log('aplicacion iniciada en localhost://8000')
})

