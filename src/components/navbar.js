import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {scrolled: false}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            scrolled: scrolled > 0,
        })
    }

    render() {
        console.log(this.state)
        return (
            <div id="navbar" className={this.state.scrolled ? "navbar scroll" : "navbar"}>
                <img className="navbar-image" src={"https://raw.githubusercontent.com/seyuboglu/sabri-site/master/res/main.jpeg"}/>
                <div className="navbar-info"> 
                    <div className="navbar-name"> Sabri Eyuboglu</div>
                    <div className="navbar-github">
                        
                    </div>
                    <div className="navbar-email">
                        eyuboglu <b><i>at</i></b> stanford <b><i>dot</i></b> edu
                    </div>
                    <div className="external-links">
                        <a href="https://github.com/seyuboglu">
                            <div class="external-link github-link"> </div>
                        </a>
                        <a href="https://www.linkedin.com/in/evan-sabri-eyuboglu-21509bb2/">
                            <div class="external-link linkedin-link"> </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}