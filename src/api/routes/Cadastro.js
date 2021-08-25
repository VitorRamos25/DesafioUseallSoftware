const express = require('express')
const route = express.Router()
const cadastro = require('../models/cadastro')



//mostra todos os clientes cadastrados

route.get('/busca', async (req, res) => {

    try {

        let cliente = []
        cliente = await cadastro.find()
        res.json(cliente)

    } catch (error) {

        console.error(error.messager)
        res.status(500).json({ error: "Erro ao buscar cliente" })
    }

})



//cadastra os clientes

route.post('/cadastro', async (req, res) => {

    try {

        let clienteExiste = []
        clienteExiste = await cadastro.find()              //busca todas as inserções no banco


        const cliente = new cadastro(req.body)             //pega as informações inseridas no corpo e guarda em uma variavel


        for (i = 0; i < clienteExiste.length; i++) {       //Estrutura de repetição para percorrer todo o banco de dados


            if (clienteExiste[i].CNPJ == cliente.CNPJ) {     //condição para CNPJ duplicado

                res.json("Esse CNPJ já está em uso!!")
                break
            }
            else if(cliente.CNPJ > 100000000000000 || cliente.CNPJ < 9999999999999){    //Condição para CNPJ digitado
                                                                                        //incorretamente
                res.json("Esse CNPJ é invalido !!")
                break
            }                                                   
            else if(clienteExiste[i] == clienteExiste.length){      //condição onde percorre todo o banco de dados,
                const resultado = await cliente.save()              //para que possa comparar todos os CNPJ já existentes,
                res.json(resultado)                                 //se não existir então insere no banco.
                break

            }
            
        }


    } catch (error) {

        console.error(error.messager)
        res.status(500).json({ error: "Erro ao salvar casdastro" })
    }

})

//recupera o dado no banco pelo id e atualiza o campo que desejar

route.put('/:id', async (req, res) => {

    try {

        const id = req.params.id
        const corpo = req.body
        const resultado = await cadastro.findByIdAndUpdate(id, corpo)
        res.json(resultado)

    } catch (error) {

        console.error(error.messager)
        res.status(500).json({error: "Erro ao modificar cadastro"})
    }


})


//deleta o dado no banco pelo id

route.delete('/:id', async (req, res) => {

    try {

        const id = req.params.id
        const resultado = await cadastro.findByIdAndDelete(id)
        res.json(resultado)

    } catch (error) {

        console.error(error.messager)
        res.status(500).json({error: "Erro ao deletar cadastro"})
    }


})



module.exports = route