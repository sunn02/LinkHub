const express = require('express');
const connectDB = require('./config/db'); // Importar la función de conexión
const linksRoutes = require('./routes/linksRoutes'); // Importar las rutas de tags
const commentsRoutes = require('./routes/commentsRoutes')
const cors = require("cors");
const app = express();

// Conectar a la base de datos
connectDB();

// Configurar el middleware
app.use(express.json()); 
app.use(cors())

// Definir una ruta básica
app.use("/links", linksRoutes);
app.use("/comments", commentsRoutes); 


// Configurar el puerto
const PORT =3005;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
