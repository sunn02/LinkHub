const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/linksHub';

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log('Conexión exitosa a MongoDB con Mongoose');
  } catch (error) {
    console.error('Error conectando con Mongoose:', error);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
