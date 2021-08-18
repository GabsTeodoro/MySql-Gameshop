module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao catálago de pedidos de games'})
    })

    server.get('/pedidos', (require, response) => {
        const sql = 'select pedido.id_pedido, clientes.nome_cliente, pedido.quantidade, games.nome_game, games.preço, categoria.nome_categoria from pedido join clientes on pedido.fk_cliente = clientes.id_cliente join games on pedido.fk_idgames = games.id_game join categoria on games.fk_idcategoria = categoria.id_categoria';
        connection.query(sql, (error, res) => {
            if (error){
                return error;
            } console.log("games: ", res);
            response.json(res)
        })
    })
};
