import React, {Component} from 'react';
import Item from './Item';
import Avatar from './Avatar';

class Cards extends Component {
    render() {
        return (
            <a className="card">
                <Avatar value={this.props.contato.nome} />
                <Item value={this.props.contato.nome} />
            </a>
        );
    }
}

export default Cards;