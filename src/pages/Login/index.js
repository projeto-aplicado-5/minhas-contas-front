import React from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './login.css'
import happyGuy from '../../assets/happy-guy.jpg'

export default function Accounts() {


    return (
        <div id="login">
            <header>
                MINHAS CONTAS
            </header>
            <body id="login"> 
                <h1>ALCANCE SEUS OBJETIVOS CONOSCO</h1>

                <section>
                    <form action="" method="post">
                        <legend>CADASTRE-SE AQUI</legend>
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text"/>
                        <label htmlFor="email">Email</label>
                        <input type="email"/>
                        <label htmlFor="senha">Senha</label>
                        <input type="password"/>
                        <label htmlFor="confSenha">Confirmar Senha</label>
                        <input type="password"/>
                        <button type="submit">Cadastre-se</button>
                        <Link className="logar" to="/cadastrar">Já possui um cadastro? Clique aqui</Link>
                    </form>

                    <img src={happyGuy} alt="happy guy"/>
                </section>
            </body>
        </div>
    );
}