import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import './side-menu.css';

export default function Accounts() {
    
    const [ showSummary, setShowSummary ] = useState(true);

    useEffect(() => {
        const storageShowSummary = window.localStorage.getItem('showSummary');  
        const boolValue = storageShowSummary === 'true' || storageShowSummary === null;
        setShowSummary(boolValue);
    }, [])
    
    const { path } = useRouteMatch();

    const handleEyeClick = event => {
        window.localStorage.setItem('showSummary', !showSummary);
        setShowSummary(!showSummary);
    };

    return (
        <aside id="side-menu">
            <section className="menu-header">
                <h1>Minhas Contas</h1>
                <p>Bem vindo, Kakaroto</p>
            </section>
            <nav>
                <ul>
                    <li className={path === '/lançamentos' ? 'active' : ''}>
                        <Link to="/lançamentos">Histórico de Lançamentos</Link>
                    </li>
                    <li className={path === '/receita' ? 'active' : ''}>
                        <Link to="/receita">Adicionar Lançamento</Link>
                    </li>
                    <li className={path === '/contas' ? 'active' : ''}>
                        <Link to="/contas">Contas</Link>
                    </li>
                    <li className={path === '/categorias' ? 'active' : ''}>
                        <Link to="/categorias">Categorias</Link>
                    </li>
                </ul>
            </nav>
            <section className="menu-footer">
                <div className="account-summary">
                    <small>R$</small>
                    <h3>
                        { showSummary ? 
                        '2.225,00' : 
                        <span>( ͡~ ͜ʖ ͡°)</span> }
                    </h3>
                    <button onClick={ handleEyeClick }>
                        {showSummary ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>
                <p>{ showSummary ? 'Seu saldo geral' : 'shhhh'}</p>
            </section>
        </aside>
    );
}