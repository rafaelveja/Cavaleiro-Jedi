import React from 'react';
import './../../estilo.css'
import { Link } from 'react-router-dom';  
import Logo from '../../imagens/LOGO.png'  
function Menu () {
    return (
        <nav class="navbar navbar-expand-sm navbar-light" style={{backgroundColor: "red"}}>
    <Link class="navbar-brand" to="/"><img src={Logo} class="img-responsive img-fluid" alt="Full Stack Eletro" /></Link>
    
    <button class="navbar-toggler d-lg-none bg-light" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <Link class="nav-link text-white" to="/produtos">Produtos</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link text-white" to="/loja">Lojas</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link text-white" to="/contatos">Contatos</Link>
            </li>
        </ul>
    
    </div>
</nav>
    )
}
export default Menu