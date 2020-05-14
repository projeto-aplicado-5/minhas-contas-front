import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Entrys from './pages/Entrys'
import NewEntry from './pages/NewEntry'
import Categories from './pages/Categories'
import Accounts from './pages/Accounts'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastrar" component={Register} />
                <Route path="/lançamentos" component={Entrys} />
                <Route path="/adicionar-lançamento" component={NewEntry} />
                <Route path="/categorias" component={Categories} />
                <Route path="/contas" component={Accounts} />
            </Switch>
        </BrowserRouter>
    )
}