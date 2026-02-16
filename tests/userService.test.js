const userService = require ('../service/userService');
const userDao = require ('../dao/userDao');
const bcrypt = require ('bcryptjs');

//mock
jest.mock('../dao/userDao');
jest.mock('bcryptjs');

test('Deve criar um usuário com sucesso', async () => {
  bcrypt.genSalt.mockResolvedValue('saltFalso');
  bcrypt.hash.mockResolvedValue('senhaHash');
  userDao.create.mockResolvedValue(10);

  const novoUsuario = {
    nome: 'UserTeste',
    email: 'user@email.com',
    senha: '123'
  };

  const resultado = await userService.create(novoUsuario);

  expect(resultado.id).toBe(10);
  expect(resultado.mensagem).toBe('Usuário criado com sucesso!');
});

test('Deve listar todos os usuários ativos', async () => {
  const listaFalsa = [
    {id: 1, nome: 'João', email: 'joao@email.com'},
    {id: 1, nome: 'Maria', email: 'maria@email.com'}
  ];

  userDao.findAll.mockResolvedValue(listaFalsa);

  const resultado = await userService.findAll();

  expect(resultado.length).toBe(2);
  expect(resultado[0].nome).toBe('João');
  expect(resultado[1].nome).toBe('Maria');
});