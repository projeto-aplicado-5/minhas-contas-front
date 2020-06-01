import React from 'react'

import Template from '../../components/Template' 
import {FiTrash2} from 'react-icons/fi'
import api from '../../services/api'

import './accounts.css'

export default function Accounts() {


    return (
        <Template>
            <div id="contas">
                <h1>CONTAS BANCÁRIAS</h1>

                <form id="addConta" action="" method="post">
                    <label htmlFor="nome">Nome da conta</label>
                    <input type="text"/>
                    <label htmlFor="saldo">Saldo Inicial</label>
                    <input type="number" min="0" placeholder="R$0,00" />
                    <button type="submit">Adicionar Conta</button>
                </form>

                <ul id="contasCadastradas">
                    <li>
                        <p>Nome Conta</p>
                        <p id="saldoConta">R$ 200,00</p>
                        <button type="button">
                            <FiTrash2 size={16} color="#a8a8b3" />
                        </button>
                    </li>

                    <li>
                        <p>Nome Conta</p>
                        <p id="saldoConta">R$ 7,90</p>
                        <button type="button">
                            <FiTrash2 size={16} color="#a8a8b3" />
                        </button>
                    </li>
                </ul>
            </div>
        </Template>
    );
}