const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const port = 3000;

const Cliente = require('./models/cliente');
const Vendedor = require('./models/vendedor');
const Produto = require('./models/produto');
const Loja = require('./models/loja');
const Fornecedor = require("./models/fornecedor");
const path = require('path');

const rotaVendedor = require("./routes/vendedor");
const rotaCliente = require("./routes/cliente");

// Bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Arquivos estáticos HTML e CSS
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.use('/vendedor', rotaVendedor);
app.use('/cliente', rotaCliente);

// Rota de cadastro de cliente
app.post('/cadastroCliente', (req, res) => {
  // Aqui você pode processar o cadastro do cliente recebido no req.body
  const cliente = req.body.cliente;
  // Exemplo de salvamento no banco de dados:
  Cliente.cadastro(cliente)
    .then(() => {
      res.send('Cliente cadastrado com sucesso!');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Erro ao cadastrar o cliente.');
    });
});

// Rota de cadastro de vendedor
app.post('/cadastroVendedor', (req, res) => {
  // Aqui você pode processar o cadastro do vendedor recebido no req.body
  const vendedor = req.body.vendedor;
  // Exemplo de salvamento no banco de dados:
  Vendedor.cadastro(vendedor)
    .then(() => {
      res.send('Vendedor cadastrado com sucesso!');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Erro ao cadastrar o vendedor.');
    });
});

// Outras rotas...

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});






