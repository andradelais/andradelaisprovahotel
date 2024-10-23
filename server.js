const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'root', 
    host: 'localhost',
    database: 'hott2'
});

// Conectar ao banco de dados
con.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo");
}

// CRUD - Create
const createCliente = (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body; 
    
    const query = 'INSERT INTO clientes (cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Cliente criado com sucesso', result });
        }
    });
};

// CRUD - Read
const readCliente = (req, res) => {
    con.query("SELECT * FROM clientes", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

// CRUD - Update
const updateCliente = (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = 'UPDATE clientes SET nome = ?, cpf = ?, email = ?, Endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    });
};

// CRUD - Delete
const deleteCliente = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM clientes WHERE cliente_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente removido com sucesso', result });
        }
    });
}


// CRUD - Create
const createEstacionamento = (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body; 
    
    const query = 'INSERT INTO estacionamento (cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Estacionamento criada com sucesso', result });
        }
    });

    // CRUD - Read
const readEstacionamento = (req, res) => {
    con.query("SELECT * FROM estacionamento", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

// CRUD - Update
const updateEstacionamento = (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = 'UPDATE estacionamento SET nome = ?, cpf = ?, email = ?, Endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Estacionamento atualizado com sucesso', result });
        }
    });
};

// CRUD - Delete
const deleteEstacionamento= (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM estacionamento WHERE estacionamento_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Estacionamento removido com sucesso', result });
        }
    });
};

// CRUD - Create
const createQuartos = (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body; 
    
    const query = 'INSERT INTO funcionario (cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'quarto criada com sucesso', result });
        }
    });
};
    // CRUD - Read
const readQuartos= (req, res) => {
    con.query("SELECT * FROM quartos", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};
// CRUD - Update
const updateQuartos= (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = 'UPDATE quartos SET nome = ?, cpf = ?, email = ?, Endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'quartos atualizado com sucesso', result });
        }
    });
};
// CRUD - Delete
const deleteQuartos = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM quartos WHERE cliente_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Quartos  removido com sucesso', result });
        }
    });
};

    // CRUD - Create
const createReservas = (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body; 
    
    const query = 'INSERT INTO reservas (cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'reservas criada com sucesso', result });
        }
    });
};
    // CRUD - Read
const readReservas= (req, res) => {
    con.query("SELECT * FROM reservas", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};
// CRUD - Update
const updateReservas= (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = 'UPDATE reservas SET nome = ?, cpf = ?, email = ?, Endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'reservas atualizado com sucesso', result });
        }
    });
};
// CRUD - Delete
const deleteReservas = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM reservas WHERE cliente_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Reservas  removido com sucesso', result });
        }
    });

};
    // CRUD - Create
const createTelefone = (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body; 
    
    const query = 'INSERT INTO telefone (cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'telefone criada com sucesso', result });
        }
    });
};
// CRUD - Read
const readTelefone= (req, res) => {
    con.query("SELECT * FROM telefone", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};
// CRUD - Update
const updateTelefone= (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = 'UPDATE reservas SET nome = ?, cpf = ?, email = ?, Endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'telefone atualizado com sucesso', result });
        }
    });
};
// CRUD - Delete
const deleteTelefone = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM telefone WHERE telefone_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: ' telefone removido com sucesso', result });
        }
    });
};



const app = express();
app.use(express.json());
app.use(cors());
app.get("/", teste);

// Rotas para Cliente
app.post("/clientes", createCliente);
app.get("/clientes", readCliente);
app.put("/clientes", updateCliente);
app.delete("/cliente/:cliente_id", deleteCliente);

// Rotas para Estacionamento
app.post("/estacionamento", createEstacionamento);
app.get("/estacionamento", readEstacionamento);
app.put("/estacionamento", updateEstacionamento);
app.delete("/estacionamento/:estacionamento_id", deleteEstacionamento);

// Rotas para Quartos
app.post("/quartoos", createQuartos);
app.get("/quartos", readQuartos);
app.put("/quartos", updateQuartos);
app.delete("/quartos/:idquartos", deleteQuartos);

// Rotas para Reservas
app.post("/reservas", createReservas);
app.get("/reservas", readReservas);
app.put("/reservas", updateReservas);
app.delete("/reservas/:idreservas", deleteReservas);

// Rotas para Telefone
app.post("/telefone", createTelefone);
app.get("/telefone", readTelefone);
app.put("/telefone", updateTelefone);
app.delete("/telefone/:id", deleteTelefone);

// Inicialização do servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
};
