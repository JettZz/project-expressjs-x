const express = require('express');
const app = express();
const PORT = 3006
const router = require('./router/routes');
const userRouter = require('./router/userRouter');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.use('/', router);

app.use('/users', userRouter);

app.use(errorHandler);

app.listen(PORT, ()  => {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
})