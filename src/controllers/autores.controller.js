const AutorModel = require('../models/autor.model');
const PostModel = require('../models/post.model');

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

// PUT /api/autores/autoresId
const updateAutor = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await AutorModel.updateAutorById(autorId, req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

//DELETE /api/autores/auroresId Elimina el autor y todos sus posts
const deleteAutorAndPosts = async (req, res) => {
    try {
        const { autorId } = req.params;
        await PostModel.deleteAllPostsByAutorId(autorId);
        const [result] = await AutorModel.deleteAutor(autorId);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    };
}

module.exports = {getAllAutores, createAutor, updateAutor, deleteAutorAndPosts};