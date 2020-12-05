<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require './Models/pedido.php';
$pedido = Pedido::recebepedido();
print_r(
    json_encode($pedido)
);