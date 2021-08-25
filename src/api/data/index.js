const mongoose = require('mongoose')
const uri = "mongodb+srv://vitor:oXgmI0AsJ7fHR4gp@cluster0.5fg79.mongodb.net/Cadastro?retryWrites=true&w=majority"
const opcoes = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, opcoes)

mongoose.connection.on('connected', function(){
    console.log("Conexão com o banco realizada com sucesso!")
})

module.exports = mongoose 