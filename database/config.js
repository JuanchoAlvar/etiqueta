const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB', error);
        throw new Error('Error al iniciar la base de datos');
    }
};

module.exports = dbConnection;