import React from 'react';

const Header = () => (
    <div className="tela-contatos">
        <div className="title">
            <div className="title-texto">
                Linkers - Agenda
            </div>
        </div>
        <div className="search">
            <form>
                <div>
                    <input type="search" className="empty" placeholder="&#xF002; Pesquisar"/>
                </div>
            </form>
        </div>
        <div className="line-separator"></div>
    </div>
);

export default Header;