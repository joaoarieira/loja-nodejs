const { response } = require('express');
const db = require('../services/db');

async function getAllProducts() {
    const data = await db.query('SELECT * FROM produto');
    return data;
}

async function getAnProductById(id) {
    const data = await db.query('SELECT * FROM produto WHERE id = ?', [id]);
    return data;
}

async function newProduct(nome, descricao, preco, quantidade) {
    await db.query(
        'INSERT INTO produto(nome, descricao, preco, quantidade) VALUES (?, ?, ?, ?)',
        [nome, descricao, preco, quantidade]
    );
    return { nome, descricao, preco, quantidade };
}

async function setProduct(id, nome, descricao, preco, quantidade) {
    await db.query(
        'UPDATE produto SET nome = ?, descricao = ?, preco = ?, quantidade = ? WHERE id = ?',
        [nome, descricao, preco, quantidade, id]
    );
    return { id, nome, descricao, preco, quantidade };
}

async function removeProduct(id) {
    await db.query(
        'DELETE FROM produto WHERE id = ?',
        [id]
    );
}

module.exports = { getAllProducts, getAnProductById, newProduct, setProduct, removeProduct };