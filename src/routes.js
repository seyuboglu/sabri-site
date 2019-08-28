import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import HomePage from './components/home';
import NotesPage from './components/notes';

export default (
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/notes" component={NotesPage} />
        </div>
    </Router>
);