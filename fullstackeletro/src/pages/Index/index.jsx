import React from 'react';
import './../../estilo.css'
import Menu from './../../components/Menu'
import Formadepagamento from '../../imagens/forma de pagamento.png'
function Index() {
    return (


        <div class="container-fluid">

            <Menu />

            <main style={{ textAlign: 'center' }}>
                <h1>Sejam Bem Vindos</h1>
                <br /><br /><br />
                <h3> Aqui em nossa loja, <em>DevOps tem descontos</em> nos produtos para sua casa !!!</h3>
            </main>

            <br /><br /><br /><br /><br /><br /><br />


            <footer id="rodapé">
                <p id="formas_pagamento"><b>Formas de pagamento</b></p>
                <img src={Formadepagamento} />
                <p>&copy; Recode Pro ( by Rafael Veja )</p>
            </footer>

        </div>
    )
}
export default Index