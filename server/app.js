const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const helmet = require('helmet');
require('./db/mongoose');
const todoRouter = require('./routes/Todo');
const cors = require('cors');
const app = express();
const http = require('http')
const server = http.createServer(app);
const socketIO = require('socket.io')
const io = socketIO(server);
//Requiring Mongoose
const Todo = require('./model/Todo');


//middleware
app.use(cors())
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api', todoRouter);

io.on('connection', socket=>{
    console.log('new user connected');
    socket.on('message', body=>{
        socket.brodcast.emit('message', {msg: body});
    });
    io.on('disconnect', ()=>{
        console.log('one user disconnected')
    })
})


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
var port = process.env.PORT || 1200;
server.listen(port, () => console.log(`Magic is happeing on port ${port}`))