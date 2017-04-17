import React, {Component} from 'react';
import Cards from './components/Cards';

class App extends Component {
    render() {
        return (
            <div>
                <div className="tela-contatos">
                    <div className="title">
                        <div className="title-texto">
                            Meus Contatos
                        </div>
                    </div>
                    <div className="search">
                        <form>
                            <div>
                                <input type="search" className="empty" placeholder="&#xF002; Pesquisar"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="cards">
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards><Cards></Cards><Cards></Cards><Cards></Cards><Cards></Cards><Cards></Cards>
                </div>

                <div className="button-circle">
                    <span className="icon-circle"><i className="fa fa-plus" aria-hidden="true"></i></span>
                </div>
            </div>
        );
    }
}

export default App;
