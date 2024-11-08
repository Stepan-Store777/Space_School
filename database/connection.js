

const mysql = require('mysql2/promise');

const bd_usuario = 'us_etim_122_g2'; // usuário
const bd_senha = 'ec0623'; // senha 
const bd_servidor = '10.67.22.216'; // servidor
const bd_porta = '3306'; // porta 
const bd_banco = 'bd_tcc_etim_122_g2'; // nome do banco
let conecction; 

const config = {
   host: bd_servidor,
   port: bd_porta, //Default: 3306
   user: bd_usuario,
   password: bd_senha,
   database: bd_banco,
   waitForConnections : true,
   conecctionLimit : 10, // Default: 10 - deixar 100 ou 1000
   queueLimit: 0,
}



try {
    conecction = mysql.createPool(config);

    console.log('Chamou conexão MySql!');

}catch (error) {
    console.log(error);
}

module.exports = conecction;  