const selectAllPostsWithAutores = () => {
  return db.query(
    "SELECT p.idposts, p.titulo, p.descripcion, p.fecha_creacion, p.categoria, a.idautores, a.nombre as nombre_autor, a.email, a.imagen as imagen_autor FROM posts p JOIN autores a ON p.fk_autores_id = a.idautores;"
  );
};

const selectPostById = (postId) => {
    return db.query('select * from posts where idposts = ?', [postId]);
};

const selectPostByAutorId = (autorId) => {
    return db.query('select * from posts where fk_autores_id = ?', [autorId]);
}

const insertPost = ({
    titulo,
    descripcion,
    categoria,
    fk_autores_id
}) => {
    return db.query(
        "insert into posts (titulo, descripcion, categoria, fk_autores_id) values (?, ?, ?, ?)",
        [
            titulo,
            descripcion,
            categoria,
            fk_autores_id
        ]
    );
};

const updatePostById = (postId, { titulo, descripcion, categoria, fk_autores_id }) => {
    return db.query(
        'update posts set titulo = ?, descripcion = ?, categoria = ?, fk_autores_id = ? where idposts = ?',
        [titulo, descripcion, categoria, fk_autores_id, postId]
    );
};

const deletePostById = (postId) => {
    return db.query('delete from posts where idposts = ?', [postId]);
};

const deleteAllPostsByAutorId = (autorId) => {
    return db.query('delete from posts where fk_autores_id = ?', [autorId])
};

module.exports = { selectAllPostsWithAutores, selectPostById, insertPost, updatePostById, deletePostById, deleteAllPostsByAutorId, selectPostByAutorId };