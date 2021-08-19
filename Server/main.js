const express = require('express');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');
const postRouter = require('./routers/postRouter');
const cors = require('cors');

let app = express();

app.use(cors());

app.use(express.json());

require('./configs/database');

app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/posts', postRouter);

app.listen(8000);
 

