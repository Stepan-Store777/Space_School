
const express = require('express');
const cors = require('cors');

const router = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());  // Substitua express() por express.json()
app.use(router); 

// tornando as pasta public acessível para imagens
app.use('/public', express.static('public')); 

const porta = 3333;

app.listen(porta, () => {
    console.log('Servidor iniciado na porta ' + porta);
});

// Mantenha a definição do app.get() após o uso das rotas
app.get('/', (request, response) => {
    response.send('Hello World');
});
