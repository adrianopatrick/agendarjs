import React from 'react';
import Search from './Search';

const Header = () => (
    <div className="tela-contatos">
        <div className="title">
            <div className="title-texto">
                Linkers - Agenda
            </div>
        </div>
        <Search />
        <div className="line-separator"></div>
    </div>
);

export default Header;