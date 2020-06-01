import React from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './register.css'
import happyGuy from '../../assets/happy-guy.jpg'

export default function Register() {


    return (
        <div id="cadastrar">
            <header>
                MINHAS CONTAS
            </header>
            <body id="cadastrar"> 
                <h1>ALCANCE SEUS OBJETIVOS CONOSCO</h1>

                <section>
                    <form id="cadastro" action="" method="post">
                        <legend>CADASTRE-SE AQUI</legend>
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" id="name" required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" required/>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" required/>
                        <label htmlFor="confSenha">Confirmar Senha</label>
                        <input type="password" id="confSenha" required/>
                        <button type="submit">Cadastre-se</button>
                        <Link className="logar" to="/logar">Já possui um cadastro? Clique aqui</Link>
                    </form>

                    <img id="happyGuy" src={happyGuy} alt="happy guy"/>
                </section>
            </body>
        </div>
    );
}