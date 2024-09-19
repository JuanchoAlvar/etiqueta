// routes/tiqueteRoutes.js
const { Router } = require('express');
const { crear, editar, eliminar } = require('../controllers/tiqueteController');

const router = Router();

router.post('/', crear);
router.put('/:id', editar);
router.delete('/:id', eliminar);

module.exports = router;
