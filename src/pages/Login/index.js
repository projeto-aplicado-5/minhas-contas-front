import React from 'react'


import api from '../../services/api'

import './login.css'


export default function Accounts() {


    return (
        <div id="login">
            <form id="logar" action="">
                <legend>Fazer Login</legend>
                <label htmlFor="nome">Nome Usuario</label>
                <input id="nome" type="text"/>
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="text"/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}