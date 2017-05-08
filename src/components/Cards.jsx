import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';
import Avatar from './Avatar';

class Cards extends Component {
    render() {
        return (
            <Link to={`/detalhar/${this.props.contato.id}`} className="card">
                <Avatar value={this.props.contato.nome} />
                <Item value={this.props.contato.nome} />
            </Link>
        );
    }
}

export default Cards;