import React, {Component} from 'react';
// import Cards from './components/Cards';
import Header from './components/Header';
import Add from './components/Add';
import Cards from "./components/Cards";

class App extends Component {

    constructor() {
        super();
        this.state = {contatos: []};
    }

    componentDidMount() {
        fetch(`http://localhost:8080/agenda-web/rest/agenda/contatos`)
            .then(response => {
                return response.json()
            }).then(json => {
            this.setState({contatos: json});
        });
    }

    render() {
        return (
            <div>
                <Header/>

                <div className="cards">
                    {this.state.contatos.map(contato => {
                        return <Cards key={contato.id} contato={contato}/>
                    })}
                </div>

                <Add/>
            </div>
        );
    }
}

export default App;
