class User {
  id;
  nome;
  email;
  senha;
  telefone;
  role;
  user_tim_created;
  vldAtivo;

  constructor({ id, nome, email, senha, telefone, role, user_tim_created, vldAtivo }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
    this.role = role || 'USER'; // padrão sempre USER
    this.user_tim_created = user_tim_created;
    this.vldAtivo = vldAtivo !== undefined ? vldAtivo : true;
  }
}

module.exports = User;