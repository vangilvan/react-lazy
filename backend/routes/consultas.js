const express = require("express");
const Router = express.Router();
const connection = require("../connection");


Router.get("/produtos", (req, res) => {
   connection.query("SELECT * FROM produto", (err, results) => {
        if (!err) {
            res.json(results);
        } else {
            console.log(err);
        }
    });
})

Router.get("/vendidos", (req, res) => {
    connection.query("SELECT p.idprod, pr.nome_produto, pr.precofinal, SUM(p.quantidade) AS qtdtotal FROM pedidos AS p INNER JOIN produto AS pr on p.idprod = pr.idproduto GROUP BY pr.nome_produto ORDER BY SUM(p.quantidade) DESC", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})

module.exports = Router;