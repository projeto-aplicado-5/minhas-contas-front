import React from 'react'

import './side-menu.css'

export default function Accounts() {
    return (
        <aside id="side-menu">
            <section className="menu-header">
                Oi, eu sou o menu.
            </section>
            <nav>
                Itens do menu.
            </nav>
            <section className="menu-footer">
                Rodapé do menu.
            </section>
        </aside>
    );
}