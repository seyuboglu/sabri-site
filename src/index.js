import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';
import NotesPage from './components/notes'
import AboutPage from './components/about'
import PetCtPage from './components/pet_ct'

const routing = (
    <Router basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/papers/petct" component={PetCtPage} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
