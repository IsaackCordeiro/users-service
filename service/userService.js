const userDao = require('../dao/userDao');
const User = require('../model/User');
const bcrypt = require('bcryptjs');

exports.create = async (userData) => {
  const user = new User(userData);

  const salt = await bcrypt.genSalt();
  user.senha = await bcrypt.hash(user.senha, salt);

  const insertId = await userDao.create(user);

  return {
    id: insertId,
    mensagem: 'Usuário criado com sucesso!'
  };
};

exports.findAll = async () => {
  return await userDao.findAll();
};

exports.findById = async (id) => {
  const userData = await userDao.findById(id);

  if (!userData) {
    throw new Error('Usuário não encontrado');
  }

  return new User(userData);
};

exports.update = async (id, userData) => {
  const user = new User(userData);
  user.id = id;

  const affectedRows = await userDao.update(user);

  if (affectedRows == 0) {
    throw new Error('Usuário não encontrado ou inativo');
  }

  return {
    mensagem: 'Dados do usuário atualizados com sucesso!',
    updatedUser: user
  };
};

exports.delete = async (id) => {
  const affectedRows = await userDao.delete(id);

  if (affectedRows == 0) {
    throw new Error('Usuário não encontrado para exclusão');
  }

  return {
    mensagem: 'Usuário desativado com sucesso!'
  };
};