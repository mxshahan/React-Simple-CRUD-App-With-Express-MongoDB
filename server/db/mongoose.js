const mongoose = require('mongoose');

mongoose.connect('mongodb://root:12345@ds117758.mlab.com:17758/react_todo');

mongoose.Promise = global.Promise;
module.exports = mongoose;