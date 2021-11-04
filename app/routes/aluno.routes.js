module.exports = app => {

    const alunoController = require('../controllers/aluno.controller');

    app.route('/api/aluno')
        .post(alunoController.create)

    .get(alunoController.getAll)

    app.route('/api/aluno/:id')
        .put(alunoController.update)
        .delete(alunoController.delete)
        .get(alunoController.findById)

}