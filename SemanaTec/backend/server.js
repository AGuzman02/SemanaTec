const express = require('express');
const mongoose = require('mongoose'); // Importa mongoose
const app = express();
const port = process.env.PORT || 3000; // Elige el puerto que desees

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/tu_basededatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
  });
  
// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Backend con Express funcionando!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
