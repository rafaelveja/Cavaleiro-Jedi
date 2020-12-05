<?php
require 'Connection.php';

class Produto
{

    public $idproduto;
    public $categoria;
    public $descricao;
    public $preco;
    public $precofinal;
    public $imagem;

    public static function recebeprodutos()
    {
        $conexao = Connection::conectar();
        $stmt = $conexao->query('select * from produto');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
