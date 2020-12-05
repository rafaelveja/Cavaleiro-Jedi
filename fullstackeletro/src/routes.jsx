import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produtos from './pages/Produtos'
import Contatos from './pages/Contato'
import Index from './pages/Index'
import Loja from './pages/Loja'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/contatos" component={Contatos} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/loja" component={Loja} />
                {/*<Route path="/produtos" component={Produtos} />
                <Route path="/lojas" component={Lojas} />
                 */}

            </Switch>
        </BrowserRouter>)}

export default Routes
