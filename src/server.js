require('dotenv').config();
const app = require('./app');

// não remova a variável `API_PORT` ou `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
