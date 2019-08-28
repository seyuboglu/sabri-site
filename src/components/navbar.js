import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="nav-bar" class="nav-bar home-nav-bar">
                <a class="main-link" href="/#" class="btn"><div>MD + ML</div></a>
                <a href="/about" class="btn">About</a>
                <a target="_blank" href="https://repl.it/logout" class="btn">Login</a>
            </div>
        )
    }
}