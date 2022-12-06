const express = require('express');
const routers = require('./routers');

const app = express();

app.use(express.json());
app.use('/user', routers.userRouter);
app.use('/login', routers.loginRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
