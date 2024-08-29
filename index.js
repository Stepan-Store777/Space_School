// const express = require('express');
// const cors = require('cors');

// const router = require('./routes/routes');

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(router);


// // const porta = process.env.PORT  ||  3333;
// const porta = 3333;

// app.listen(porta, () => {
//     console.log('Servidor iniciado na porta' + porta);
   
// });

// app.get('/', (request, response) => {
//     response.send('Space_School');
// });
const express = require('express');
const cors = require('cors');

const router = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());  // Substitua express() por express.json()
app.use(router);

const porta = 3333;

app.listen(porta, () => {
    console.log('Servidor iniciado na porta ' + porta);
});

// Mantenha a definição do app.get() após o uso das rotas
app.get('/', (request, response) => {
    response.send('Hello World');
});
