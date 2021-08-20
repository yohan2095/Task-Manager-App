const User = require('../models/userModel');

//POST
exports.createPost = function(userid , postObj){
    return new Promise ((resolve , reject)=>{
        User.findById(userid , function(err, data){
            if(err){reject(err)}
            else{
                data.posts.push(postObj);
                data.save((err , data)=>{
                    (err) ? reject(err) : resolve("Created");
                })
            }
        })
    })
}