const express = require('express');
const cors = require('cors');
const routers = require('./routers');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/user', routers.userRouter);
app.use('/login', routers.loginRouter);
app.use('/table', routers.tableRouter);
app.use('/config', routers.configRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
