import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create(
      {
        nome: 'Geovanni',
        sobrenome: 'França',
        email: 'geovanni@gmail.com',
        idade: 25,
        peso: 60,
        altura: 1.71,
      },

    );

    res.json(novoAluno);
  }
}

export default new HomeController();
