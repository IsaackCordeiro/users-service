const userService = require ('../service/userService'); 

exports.create = async (req, res) => {
  try {
    const result = await userService.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const users = await userService.findAll();
    res.status(200).json(users);                                                                                                                                         
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const user = await userService.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    if (error.message = 'Usuário não encontrado') {
      return res.status(404).json({menssagem: error.message});
    }

    res.status(500).json({ erro: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await userService.update(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    if (error.message = 'Usuário não encontrado ou inativo') {
      return res.status(404).json({menssagem: error.message});
    }

    res.status(500).json({ erro: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const result = await userService.delete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    if (error.message = 'Usuário não encontrado para exclusão') {
      return res.status(404).json({menssagem: error.message});
    }

    res.status(500).json({ erro: error.message });
  }
};