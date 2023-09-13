import express from 'express';
//import { db } from './config/config_firebase.js';
import db from './config/config_firebase.js'; // Importa db como valor predeterminado
import { collection, getDocs } from 'firebase/firestore';


const app=express()
app.get('/', (req,res)=>{
  console.log(db)
  res.send('todo super cool')
})

//get de datos
app.get('/leerdatos', (req, res) => {
  const booksCollection = collection(db, 'books'); // Crea una referencia a la colección 'books'

  getDocs(booksCollection)
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          author: doc.data().author,
          title: doc.data().title,
        });
      });

      console.log(data);
      res.json({ mensaje: 'Datos obtenidos correctamente', datos: data });
    })
    .catch((error) => {
      console.log('Error obteniendo documentos:', error);
      res.status(500).json({ mensaje: 'Error obteniendo datos' });
    });
});

app.post('/agregardatos', (req, res) => {
  const nuevoLibro = {
    title: req.body.title,
    author: req.body.author,
  };

  // Agregar el nuevo libro a la colección "books"
  db.collection('books').add(nuevoLibro)
    .then((docRef) => {
      console.log('Libro agregado con ID:', docRef.id);
      res.json({ mensaje: 'Libro agregado correctamente', libroId: docRef.id });
    })
    .catch((error) => {
      console.error('Error al agregar el libro:', error);
      res.status(500).json({ error: 'Ocurrió un error al agregar el libro' });
    });
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

