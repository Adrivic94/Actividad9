const selectAllPostsWithAutores = () => {
  return db.query(
    "SELECT p.idposts, p.titulo, p.descripcion, p.fecha_creacion, p.categoria, a.idautores, a.nombre as nombre_autor, a.email, a.imagen as imagen_autor FROM posts p JOIN autores a ON p.fk_autores_id = a.idautores;"
  );
};

const selectPostById = (postId) => {
    return db.query('select * from posts where idposts = ?', [postId]);
};

const insertPost = ({
    titulo,
    descripcion,
    fecha_creacion,
    categoria,
    fk_autores_id
}) => {
    return db.query(
        "insert into posts (titulo, descripcion, fecha_creacion, categoria, fk_autores_id) values (?, ?, ?, ?, ?)",
        [
            titulo,
            descripcion,
            fecha_creacion,
            categoria,
            fk_autores_id
        ]
    );
};



module.exports = { selectAllPostsWithAutores, selectPostById, insertPost };