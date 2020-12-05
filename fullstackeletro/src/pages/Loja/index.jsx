import React from 'react';
import './../../estilo.css'
import Menu from './../../components/Menu'
import Formadepagamento from '../../imagens/forma de pagamento.png'
function Loja() {
    return (
        <div>

            <Menu />

            <div class="container-fluid">

                <header>
                    <h2>Nossas Lojas</h2><hr />
                </header>

                <div style={{ textAlign: "center" }}>

                    <div class="lojas">
                        <h3 class="descrição">Rio de Janeiro</h3>
                        <p class="descrição">Avenida Paulista, 985</p>
                        <p class="descrição">10º andar</p>
                        <p class="descrição">Centro</p>
                        <p class="descrição">(21) 3333-3333</p>
                    </div>

                    <div class="lojas" style={{ marginLeft: "50px", marginRight: "50px" }}>
                        <h3 class="descrição">São Paulo</h3>
                        <p class="descrição">Avenida Presidente Vargas, 5000</p>
                        <p class="descrição">3º andar</p>
                        <p class="descrição">Jardins</p>
                        <p class="descrição">(11) 44444-4444</p>
                    </div>

                    <div class="lojas">
                        <h3 class="descrição">Santa Catarina</h3>
                        <p class="descrição">Rua Major Ávila, 370</p>
                        <p class="descrição">Vila Mariana</p>
                        <p class="descrição">(47) 5555-5555</p>
                        <br />
                    </div>

                </div>
            </div>
            <br /><br /><br />
            <footer id="rodapé">
                <p id="formas_pagamento"><b>Formas de pagamento</b></p>
                <img src={Formadepagamento} />
                <p>&copy; Recode Pro</p>
            </footer>


        </div>

    )
}
export default Loja