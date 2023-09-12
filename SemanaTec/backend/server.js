const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rutas y lógica de tu aplicación aquí

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
