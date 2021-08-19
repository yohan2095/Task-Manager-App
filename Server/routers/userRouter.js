const express = require('express');
const userBL = require('../models/userBL');
const router = express.Router();

///GET ALL
router.route('/')
    .get(async function(req,resp){
        return resp.json(await userBL.getUsers());
    })


///GET BY ID
router.route('/:id')
    .get(async function(req,resp){
        let id = req.params.id
        return resp.json(await userBL.getUser(id));
})

router.route('/')
    .post(async function(req, resp){
        let obj = req.body;
        return resp.json(await userBL.addUser(obj));
    })


router.route('/:id')
    .put(async function(req,resp){
        let id = req.params.id;
        let obj = req.body;
        return resp.json(await userBL.updateUser(id,obj));
    })

    router.route('/:id')
    .delete(async function(req,resp){
        let id = req.params.id;
        return resp.json(await userBL.deleteUser(id));
    })

module.exports = router;