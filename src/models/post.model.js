const selectAllPostsWithAutores = () => {
  return db.query(
    "SELECT p.idposts, p.titulo, p.descripcion, p.fecha_creacion, p.categoria, a.idautores, a.nombre as nombre_autor, a.email, a.imagen as imagen_autor FROM posts p JOIN autores a ON p.fk_autores_id = a.idautores;"
  );
};

module.exports = { selectAllPostsWithAutores };