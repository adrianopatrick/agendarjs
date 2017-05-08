import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Detalhar from './detalhar/Detalhar';
import Agenda from './agenda/Agenda';

class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact={true} path="/" component={Agenda}/>
                        <Route path="/detalhar/:id" component={Detalhar}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
