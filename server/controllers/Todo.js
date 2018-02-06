const Todo = require('../model/Todo');
const cors = require('cors');
module.exports= {
    GetDataFrmServer : async (req,res)=>{
        const result = await Todo.find({});
        res.status(201).json(result);
    },

    AddSomethingNewOnDB : async (req,res)=>{
        //console.log(req.body);
        const data  = new Todo(req.body);
        await data.save();
        res.status(201).json({sucess : true});
    },

    DelFrmDB : async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        console.log(req.params.id);
        
        await Todo.findByIdAndRemove(req.params.id, (err, obj)=>{
            if(err) res.status(500).send(err);
            let response = {
                message: "Todo successfully deleted",
                id: obj._id
            };
            res.status(200).send(response);            
        });
    },

    OnUpdateData : async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        await Todo.findById(req.params.id, (err, obj) => {
            if(err) res.status(500).send(err);

            obj.item = req.body.item || obj.item;   
            
            obj.save((err, todo) => {
                if (err) {
                    res.status(500).send(err)
                }
                res.status(200).send(todo);
            });      
        });
    }
}