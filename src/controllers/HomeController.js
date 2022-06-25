class HomeController {
  async index(req, res) {
    res.json('HomeController em ação !!!');
  }
}

export default new HomeController();
