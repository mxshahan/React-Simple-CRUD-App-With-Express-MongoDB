const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const helmet = require('helmet');
require('./db/mongoose');
const todoRouter = require('./routes/Todo');
const cors = require('cors');
const app = express();


//middleware
app.use(cors())
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api', todoRouter);


//catch 404 Errors and forward them to error handeler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//Error handler funciton
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    //Respond to  client 
    res.status(status).json({
        error: {
            message: error.message
        }
    });
});



//start  the server 
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Magic is happeing on port ${port}`))