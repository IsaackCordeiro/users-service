const db = require('../config/db');

exports.create = async (user) => {
  sql = 'INSERT INTO usuarios (nome, email, senha, telefone, role) VALUES (?, ?, ?, ?, ?)';

  const [result] = await db.query(
    sql,
    [user.nome, user.email, user.senha, user.telefone, user.role]
  );

  return result.insertId;
};

exports.findAll = async () => {
  sql = 'SELECT id, nome, email, telefone, role, user_tim_created, vldAtivo FROM usuarios WHERE vldAtivo = true';

  const [rows] = await db.query(sql);

  return rows;
};

exports.findById = async (id) => {
  sql = 'SELECT id, nome, email, telefone, role, user_tim_created, vldAtivo FROM usuarios WHERE id = ?';

  const [rows] = await db.query(sql, [id]);

  return rows[0];
};

exports.update = async (user) => {
  sql = 'UPDATE usuarios SET nome = ?, email = ?, telefone = ?, role = ? WHERE id = ? and vldAtivo = true';

  const [result] = await db.query(
    sql,
    [user.nome, user.email, user.telefone, user.role, user.id]
  );

  return result.affectedRows;
};

exports.delete = async (id) => {
  sql = 'UPDATE usuarios SET vldAtivo = false WHERE id = ?';

  const [result] = await db.query(
    sql,
    [id]
  );

  return result.affectedRows;
};