<?php
require 'Connection.php';

class Comentarios
{

    public $id;
    public $nome;
    public $msg;
    public $data;

    public static function recebecomentarios()
    {
        $conexao = Connection::conectar();
        $stmt = $conexao->query('select * from comentarios');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
