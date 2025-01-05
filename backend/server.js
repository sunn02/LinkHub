const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Importar la función de conexión
const linksRoutes = require('./routes/linksRoutes'); // Importar las rutas de tags
const tagsRoutes = require('./routes/tagsRoutes'); // Importar las rutas de tags
const commentsRoutes = require('./routes/commentsRoutes')
const app = express();

// Conectar a la base de datos
connectDB();

// Configurar el middleware
app.use(express.json()); 

// Definir una ruta básica
app.use("/links", linksRoutes);
app.use("/comments", commentsRoutes); 


// Configurar el puerto
const PORT =3005;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
