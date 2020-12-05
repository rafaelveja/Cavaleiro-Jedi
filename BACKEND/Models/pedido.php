<?php
require 'Connection.php';

class Pedido {

    public $idpedido;
    public $cliente;
    public $Estado;
    public $Cidade;
    public $Rua;
    public $Bairro;
    public $CEP;
    public $produto;
    public $quantidade;

     public static function recebepedido (){
        $conexao = Connection::conectar();
        $stmt = $conexao -> query('select * from pedido');
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }

    
}
