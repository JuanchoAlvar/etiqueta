const mongoose = require('mongoose');

const tiqueteSchema = new mongoose.Schema({
    documentoPasajero: {
        type: String,
        required: true,
        unique: true,
    },
    nombrePasajero: {
        type: String,
        required: true,
    },
    PlacaVehiculo: {
        type: String,
        required: true,
    },
    Origen: {
        type: String,
        required: true,
    },
    Destino: {
        type: String,
        required: true,
    },
}, { timestamps: true});

module.exports = mongoose.model('tiquete', tiqueteSchema);
    