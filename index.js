const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const Cadastro = require('./src/api/routes/Cadastro')

app.use(express.json())

app.use('/', Cadastro)

app.listen(PORT, function(){
    console.log('Servidor ativo')
})