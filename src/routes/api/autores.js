const router = require('express').Router();

const AutoresController = require('../../controllers/autores.controller');

router.get('/', AutoresController.getAllAutores);
router.post('/', AutoresController.createAutor);
router.put('/:autorId',);
router.delete('/:autorId',);

module.exports = router;
