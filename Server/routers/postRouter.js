const express = require('express');
const postBL = require('../models/postBL');
const router = express.Router();

///POST
router.route('/:id')
    .post(async function(req , resp){
        let userId = req.params.id;
        let postObj = req.body;
        return resp.json(await postBL.createPost(userId , postObj))
    })

module.exports = router;