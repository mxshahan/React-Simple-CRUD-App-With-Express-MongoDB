const Todo = require('../model/Todo');
module.exports= {
    GetDataFrmServer : async (req,res)=>{
        const result = await Todo.find({});
        res.status(201).json(result);
    },

    AddSomethingNewOnDB : async (req,res)=>{
        // console.log(req.body);
        const data  = new Todo(req.body);
        await data.save();
        res.status(201).json({sucess : true});
    },

    DelFrmDB : async (req, res) => {
        await Todo.findByIdAndRemove(req.params.id, (err, obj)=>{
            if(err) res.status(500).send(err);
            let response = {
                message: "Todo successfully deleted"
            };
            res.status(200).send(response);            
        });
    },

    OnUpdateData : async (req, res) => {
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