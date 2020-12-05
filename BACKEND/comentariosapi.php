<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require './Models/comentarios.php';
$comentarios = Comentarios::recebecomentarios();
print_r(
    json_encode($comentarios)
);