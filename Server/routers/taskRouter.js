const express = require('express');
const router = express.Router();
const taskBL = require('../models/taskBL');


//GET
router.route('/:id')
    .get(async function(req,resp){
        let id = req.params.id;
        let res = await taskBL.getTask(id);
        return resp.json(res);
    })

///POST
router.route('/:id')
    .post(async function(req, resp){
        let userId = req.params.id
        let taskObj = req.body
        return resp.json(await taskBL.createTask(userId , taskObj))
    })

///PUT
router.route('/:id')
    .put(async function(req,resp){
        let taskId = req.params.id;
        let obj = req.body;

        let res = await taskBL.updateTask(taskId,obj);
        return resp.json(res);
    })



module.exports = router;