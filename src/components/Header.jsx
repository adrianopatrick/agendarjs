import React from 'react';
import Search from './Search';

const Header = (props) => (
    <div className="tela-contatos">
        <div className="title">
            <div className="title-texto">
                Linkers - Agenda
            </div>
        </div>
        <Search descricao={props.descricao} change={props.change} />
        <div className="line-separator"></div>
    </div>
);

export default Header;