const Sequelize = require('sequelize'); // atribui a referência Sequelize toda a estrutura do ORM
const sequelize = new Sequelize ('sequelize', 'root', 'Plex28ni*', {
    host: "localhost",
    dialect: "mysql"
}); //cria a conexão com o banco de dados armazenando as funções dessa conexão numa nova instância de Sequelize chamada sequelize.


const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
}) //configura uma nova tabela, com os campos e tipos. 

//Postagem.sync({force:true}) // comando para criar a tabela. 

/*Postagem.create({
    titulo: "Sequelize e MySQL",
    conteudo: "Sequelize é um ORM que permite nos conectarmos e interagirmos com bancos de dados utilizando nodejs"
}) --> insere conteúdo na tabela. */

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


//Usuario.sync({force:true})