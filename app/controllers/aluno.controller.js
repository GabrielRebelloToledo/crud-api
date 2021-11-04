const Aluno = require('../models/aluno.model');


exports.create = async(req, res) => {
    const aluno = await Aluno.create(req.body);

    if (aluno) {
        res.status(200).send({ message: 'Aluno cadastrada com sucesso!' })
    } else {
        res.status(500).send({ message: 'Erro ao cadastrar aluno. ' });
    }
}

exports.getAll = async(req, res) => {

    const aluno = await Aluno.getAll();
    res.status(200).send(aluno)
}

exports.findById = async(req, res) => {

    const aluno = await Aluno.findById(req.params.id);


    res.status(200).send(aluno);
}

exports.delete = async(req, res) => {
    const aluno = await Aluno.delete(req.params.id, req.body);

    if (aluno) {
        res.status(200).send({ message: 'Aluno deletado com sucesso' })
    } else {
        res.status(500).send({ message: 'Erro ao deletar aluno' });
    }
}

exports.update = async(req, res) => {
    const aluno = await Aluno.update(req.params.id, req.body);

    if (aluno) {
        res.status(200).send({ message: 'Aluno atualizada com sucesso' })
    } else {
        res.status(500).send({ message: 'Erro ao atualizar projeto' });
    }

}