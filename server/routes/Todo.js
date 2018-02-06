const router = require('express-promise-router')();
const TodoController = require('../controllers/Todo');
const cors = require('cors');

router.route('/', cors())
.get(TodoController.GetDataFrmServer)
.options(cors())
.post(TodoController.AddSomethingNewOnDB)

router.route('/:id', cors())
.options(cors())
.delete(TodoController.DelFrmDB)
.put(TodoController.OnUpdateData)



module.exports = router;