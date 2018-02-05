const router = require('express-promise-router')();
const TodoController = require('../controllers/Todo');

router.route('/')
.get(TodoController.GetDataFrmServer)
.post(TodoController.AddSomethingNewOnDB)

router.route('/:id')
.delete(TodoController.DelFrmDB)
.put(TodoController.OnUpdateData)



module.exports = router;