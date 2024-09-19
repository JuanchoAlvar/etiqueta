// controllers/tiqueteController.js
const tiquete = require('../models/tiquete');

// Crear tiquete
const crear = async (req, res) => {
    try {
        const nuevoTiquete = new tiquete(req.body);
        await nuevoTiquete.save();
        res.status(201).json(nuevoTiquete);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear el tiquete', error });
    }
};

// Editar tiquete
const editar = async (req, res) => {
    const { id } = req.params;
    try {
        const tiqueteActualizado = await tiquete.findByIdAndUpdate(id, req.body, { new: true });
        if (!tiqueteActualizado) {
            return res.status(404).json({ msg: 'Tiquete no encontrado' });
        }
        res.json(tiqueteActualizado);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el tiquete', error });
    }
};

// Eliminar tiquete
const eliminar = async (req, res) => {
    const { id } = req.params;
    try {
        const tiqueteEliminado = await tiquete.findByIdAndDelete(id);
        if (!tiqueteEliminado) {
            return res.status(404).json({ msg: 'Tiquete no encontrado' });
        }
        res.json({ msg: 'Tiquete eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar el tiquete', error });
    }
};

module.exports = { crear, editar, eliminar };
