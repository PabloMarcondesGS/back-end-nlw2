import express from 'express';
import routes from './routes';

const app = express();
//http:localhost:3333   para acessar a aplicação
//No insominia colocar o caminho para acessar e usar o post

//get: buscar dados ou listar
//post: criar alguma nova infomação
//put: Atualizar uma informação existente
//Delete: Deletar uma informação

//Corpo (Request body): Dados para criacao ou atualizacao de um registro
// Route Params: Indentificar qual recurso eu quero atualizar ou deletar 
// Query parms: paginação, filtros, ordenação

app.use(express.json());
app.use(routes);
// app.get('/', (request, response) =>{
//     return response.json({ message: 'Hello World'});
// });

app.listen(3333);