import React from 'react'

import Template from '../../components/Template' 
import {AiFillPlusSquare} from 'react-icons/ai'
import {FiTrash2} from 'react-icons/fi'
import api from '../../services/api'

import './categories.css'

export default function Categories() {


    return (
        <Template>
            <div id="categorias">
                <h1>CATEGORIAS</h1>

                <form id="addCat" action="" method="post">
                    <label htmlFor="novaCat">Descrição</label><br/>
                    <input id="novaCat" type="text"/>
                    <button type="submit">
                        <AiFillPlusSquare size={32} color="#1AD274" />
                    </button>
                </form>

                <ul id="catCadastradas">
                    <li>
                        <p>Renda</p>
                        <button>
                            <FiTrash2 size={28} color="#FFFFFF"/>
                        </button>
                    </li>
                    <li>
                        <p>Comida</p>
                        <button>
                            <FiTrash2 size={28} color="#FFFFFF"/>
                        </button>
                    </li>
                </ul>
            </div>
        </Template>
    );
}