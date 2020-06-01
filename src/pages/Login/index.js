import React from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api'
import {AiOutlineRollback} from 'react-icons/ai'

import './login.css'


export default function Accounts() {


    return (
        <div id="login">
            <form id="logar" action="">
                <legend>Fazer Login</legend>
                <label htmlFor="email">Email do Usuario</label>
                <input id="email" type="email" required/>
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="text" required/>
                <button type="submit">Entrar</button>
                <Link className="voltar" to="/">
                    <AiOutlineRollback size={16}/>
                    Voltar
                </Link>
            </form>
        </div>
    );
}