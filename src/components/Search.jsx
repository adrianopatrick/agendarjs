import React from 'react';

const Search = (props) => (
    <div className="search">
        <form>
            <div>
                <input type="search" value={props.descricao} onChange={props.change} className="empty" placeholder="&#xF002; Pesquisar"/>
            </div>
        </form>
    </div>
);

export default Search;