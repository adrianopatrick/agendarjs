import React, {Component} from 'react';
import Item from './Item';
import Avatar from './Avatar';

class Cards extends Component {
    render() {
        return (
            <a className="card">
                <Avatar />
                <div className="item">
                    <Item label="Nome" value="Adriano Patrick"/>
                </div>
            </a>
        );
    }
}

export default Cards;