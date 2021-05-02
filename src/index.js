const express = require('express');
const produtos = require('../services/products');
const cors = require('cors');

const port = 3005;
const app = express();

app.use(express.json());
app.use(cors());

//RETORNA TODOS OS PRODUTOS
app.get('/products', async function (req, res, next) {
    try {
        const result = await produtos.getAllProducts();
        return res.json(result);
    } catch (err) {
        console.error('[GET] ERROR: ', err.message);
        next(err);
    }
});

//RETORNA UM PRODUTO
app.get('/products/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        const result = await produtos.getAnProductById(id);
        return res.json(result);
    } catch (err) {
        console.error('[GET] ERROR: ', err.message);
        next(err);
    }
});

//ADICIONA UM PRODUTO
app.post('/products', async function (req, res, next) {
    const { nome, descricao, preco, quantidade } = req.body;
    try {
        const result = await produtos.newProduct(nome, descricao, preco, quantidade);
        return res.json(result);
    } catch (err) {
        console.error('[POST] ERROR: ', err.message);
        next(err);
    }
});

//ALTERA UM PRODUTO
app.put('/products/:id', async function (req, res, next) {
    const { id } = req.params;
    const { nome, descricao, preco, quantidade } = req.body;
    try {
        const result = await produtos.setProduct(id, nome, descricao, preco, quantidade);
        return res.json(result);
    } catch (err) {
        console.error('[PUT] ERROR: ', err.message);
        next(err);
    }
});

//REMOVE UM PRODUTO
app.delete('/products/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        await produtos.removeProduct(id);
        return res.status(204).send();
    } catch (err) {
        console.error('[DELETE] ERROR: ', err.message);
        next(err);
    }
});

//INICIA API
app.listen(port, () => {
    console.log("🚀Server started.");
});