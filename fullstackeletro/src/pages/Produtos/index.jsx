import React, { useEffect, useState } from 'react';
import './../../estilo.css'
import Menu from './../../components/Menu'
import Formadepagamento from '../../imagens/forma de pagamento.png'

function Vitrine() {
    const [produtos, setprodutos] = useState([]);
    useEffect(
        () => {

            async function pegadados() {

                const url = "http://projetos/BACKEND/produtosapi.php";
                const response = await fetch(url)
                const dados = await response.json()
                setprodutos(dados)

            }

            pegadados()



        }
        , []);
    return (produtos.map(
        (produto) => {
            return (<div class="box_produto" id=''>
                <img src={require("../../imagens/produtos/" + produto.imagem).default} width="120px" onclick="destaque(this)" />
                <br />
                <p class="descricao">{produto.descricao}</p>
                <hr />
                <p class="descrição"><strike>R$ {produto.preco}</strike></p>
                <p class="preço">R$ {produto.precofinal}</p>
                <br />
            </div>


            )
        }
    ))
}



function Produtos() {
    return (
        <div>

            <Menu />



            <header>
                <h2>Produtos</h2><hr />
            </header>

            <div class="produtos">

                <div class="categorias">
                    <h3>Categorias</h3>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-action" onclick="exibir_todos()">Todos (12)</li>
                        <li class="list-group-item list-group-item-action" onclick="exibir_categoria('geladeira')">Geladeiras (3)</li>
                        <li class="list-group-item list-group-item-action" onclick="exibir_categoria('fogao')">Fogões (2)</li>
                        <li class="list-group-item list-group-item-action" onclick="exibir_categoria('microondas')">Microondas (3)</li>
                        <li class="list-group-item list-group-item-action" onclick="exibir_categoria('lavaroupas')">Lava roupas (2)</li>
                        <li class="list-group-item list-group-item-action" onclick="exibir_categoria('lavalouca')">Lava louças(2)</li>
                    </ul>
                </div>

                <div>

                    <Vitrine />







                </div>

            </div>

            <div class="jumbotron">

                <form method="post" action="">

                    <p>Preencha o formulário abaixo para fazer o seu pedido</p>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" name="cliente" placeholder="Nome" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" name="Estado" placeholder="Estado" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="Cidade" placeholder="Cidade" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="CEP" placeholder="CEP" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" name="Bairro" placeholder="Bairro" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="Rua" placeholder="Rua" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" name="produto" placeholder="Copie e cole o nome do seu produto desejado aqui" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" name="quantidade" placeholder="Quantidade de produtos que você deseja" />
                        </div>
                    </div>

                    <br />

                    <button type="submit" class="btn btn-primary">Enviar</button>

                </form>

                <br />

            </div>

            <footer id="rodapé">
                <p id="formas_pagamento"><b>Formas de pagamento</b></p>
                <img src={Formadepagamento} />
                <p>&copy; Recode Pro</p>
            </footer>




        </div>
    )
}
export default Produtos