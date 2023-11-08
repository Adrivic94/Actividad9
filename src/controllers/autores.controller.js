const AutorModel = require('../models/autor.model');

// GET /api/autores
const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutorModel.selectAllAutores();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

// POST /api/autores
const createAutor = async (req, res) => {
    try {
        const [result] = await AutorModel.insertAutor(req.body);
        const [autor] = await AutorModel.selectAutorById(result.insertId);
        res.json(autor[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

module.exports = {getAllAutores, createAutor};