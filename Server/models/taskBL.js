const User = require('../models/userModel');

//GET TASK BY ID
exports.getTask = function(id)
{
    return new Promise((resolve, reject) => {
    User.findOne({'tasks._id' : id}, (err, data) => {
    if(err)
    {
        reject(err)
    }
    else
    {
        resolve(data.tasks.filter(x => x._id == id))
    }
    })
  })
}

//POST
exports.createTask = function(userId,taskObj){
    return new Promise((resolve,reject)=>{
        User.findById(userId , (err , data)=>{
            if(err){
                reject(err);
            }else{
                data.tasks.push(taskObj)
                data.save((err , data)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(data.tasks[data.tasks.length - 1])
                    }
                })
            }
        })
    })
}        
  
//PUT
exports.updateTask = function(taskId,obj){
    return new Promise((resolve , reject)=>{
        User.findOne({'tasks._id' : taskId} , (err, data)=>{
            if(err){reject(err)}
            else{
             data.tasks.id(taskId).set(obj);
             data.save((err)=>{
                 (err) ? reject(err) : resolve(`task - ${taskId} - updated`)
             })
            }
        })
    })
 }