const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

//retorna os usuarios
router.get('/users', (req, res, next) => {
    const users = userController.list(null,req.query.ordenado);
    res.status(200).send({
        success:true,
        mensagem: 'listando usuarios',
        data:users
    });
});
router.get('/users/:id', (req, res, next) => {
    const users = userController.list(req.params.id);

    if(users){
        res.status(200).send({
            success:true,
            mensagem: 'Usuário encontrado com a matrícula '+ req.params.id,
            data:users
        });
        
    }else{
        res.status(404).send({
            success:false,
            mensagem: 'Usuário não encontrado com a matrícula '+ req.params.id
        });
    }
    
});

//insere um usuario
router.post('/user', (req, res, next) => {

    const user = {
        nome: req.body.nome,
        idade: Number(req.body.idade)
    };

    userController.create(user)

    res.status(201).send({
        mensagem: 'O usuario foi criado',
        data: user
    })
});

//altera um usuario
router.patch('/user/:id', (req, res, next) => {
    let status = 404;
    const result = userController.update(req.params.id, req.body);

    if(result.success){
        status = 201
    }

    res.status(status).send(result);
});

// exclui um usuario
router.delete('/user/:id', (req, res, next) => {
    let status = 404;
    const result = userController.destroy(req.params.id);

    if(result.success){
        status = 201
    }

    res.status(status).send(result);
});

module.exports = router
