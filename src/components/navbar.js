import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="nav-bar" className="nav-bar home-nav-bar">
                <a className="main-link" href="/#" className="btn"><div>MD + ML</div></a>
                <a href="/about" className="btn">About</a>
                <a target="_blank" href="https://repl.it/logout" className="btn">Login</a>
            </div>
        )
    }
}