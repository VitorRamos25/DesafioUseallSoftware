const mongoose = require('../data/index.js')

let clienteSchema = new mongoose.Schema({

    _id: { type: Number,
        required: true
                    },
    Nome:{ type: String,
        required: true,
    },
    CNPJ:{ type: Number,
        required: true
    },
    DataDeCadastro:{ type: Date,
        require: true
    },
    Endereco:{ type: String,
        require: true
    },
    Telefone:{ type: Number,
        require: true
    }

})

let cliente = mongoose.model('Cliente', clienteSchema)

module.exports = cliente