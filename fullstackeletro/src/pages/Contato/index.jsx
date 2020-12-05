import React from 'react';
import './../../estilo.css'
import Menu from './../../components/Menu'
import Email from '../../imagens/email.jpg'
import Wzap from '../../imagens/wzap.png'
function Contato () {
    return (
        <div class="container-fluid">

            <Menu />

            <header>
                <h2>Fale Conosco</h2><hr />
            </header> 

            <main>
       

                <div>

                    <p style={{textAlign: 'center'}}><img src={Email} width="25px" />contato@fullstackeletro.com</p>
                    <p style={{textAlign: 'center'}}><img src={Wzap} width="25px" />(11) 99999-9999</p>


                </div>              


                <div class="jumbotron"   id="contato">

                    <form method="post" action="">  

                        Nome:
                        
                        <input type="text" class="form-control" name="nome" placeholder="" />

                        <br />

                        Mensagem:
                        
                        <textarea class="form-control" name="msg" rows="10"></textarea>

                        <br />

                        <button type="submit" class="btn btn-primary" value="Enviar">Enviar</button>
                                                         
                    </form>

                </div>

            </main>    

            <footer id="rodapé">
                <p>&copy; Recode Pro</p>
            </footer>
        </div>

    )
}
export default Contato