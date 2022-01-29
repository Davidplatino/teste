//testando

const express = require('express'); //Controla e acessar rotas, middleware e recursos
const app = express();

app.get('/projects', (request, response) => {    
	return response.send('Hello world!');
});
//método p/ configurar a porta de acesso da app, https://localhost:3333

app.listen(3333);
