import React from 'react';
import Header from './components/Header';
import Add from './components/Add';
import Cards from "./components/Cards";
import URLS from './config/URLS';

class App extends React.Component {

    constructor() {
        super();
        this.state = {descricao: '', contatos: [], onDemandContatos: []};

        this.change = this.change.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        fetch(URLS.SERVER + URLS.PORT + URLS.GET_TODOS, {method: 'GET'})
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        this.setState({...this.state, contatos: json, onDemandContatos: json});
                    });
                } else {
                    console.log('Nenhum contato cadastrado!');
                }
            })
            .catch(error => {
                console.log('Servidor fora do ar! ' + error);
            });
    }

    refresh(descricao) {
        console.log(this.state.descricao);
        this.setState({
            ...this.state,
            onDemandContatos: this.state.contatos.filter(contato => contato.nome.includes(descricao))
        });
    }


    change(e) {
        this.setState({...this.state, descricao: e.target.value});
        console.log(this.state.descricao);
        // this.refresh(e.target.value);
    }

    render() {
        return (
            <div>
                <Header descricao={this.state.descricao} change={this.change}/>

                <div className="cards">
                    {this.state.onDemandContatos.map(contato => {
                        return <Cards key={contato.id} contato={contato}/>
                    })}
                </div>

                <Add/>
            </div>
        );
    }
}

export default App;
