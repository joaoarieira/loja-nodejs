# loja-nodejs
uma API conectada a um banco de dados MySQL local

### no seu MySQL digite:
`CREATE DATABASE loja;`

`USE loja;`

`CREATE TABLE produto (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200),
    descricao TEXT,
    preco FLOAT,
    quantidade FLOAT,
    PRIMARY KEY (id)
);`

`INSERT INTO produto(nome, descricao, preco, quantidade) VALUES
    ('A revolução dos bichos: Um conto de fadas', 'Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX.', 15.9, 63),
    ('Catecismo Maior de São Pio X', 'O Catecismo de São Pio X é um resumo do Catecismo Romano.', 31.9, 32),
    ('Mônica. Aniversários - Coleção Um Tema Só', 'A Coleção um tema só reúne a cada volume mais de 300 páginas.', 59.9, 17),
    ('Os irmãos Karamázov', 'Último romance de Dostoiévski, Os irmãos Karamázov representa uma síntese de toda sua produção.', 86.8, 81);`
    
### após clonar o repositório:
`yarn` para instalar as dependências e `yarn dev` para iniciar o servidor

entre em `http://localhost:3005/products` e divirta-se
