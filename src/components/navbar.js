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

                    <div className="text-section">
                        <p>
                        <b>B.S.</b> Computer Science <br />
                        Stanford University '18 
                        </p>
                        <p>
                        <b>M.S.</b> Computer Science <br />
                        Stanford University '19
                        </p>
                    </div>


                    <div className="social-links">
                        <a href="https://github.com/seyuboglu">
                            <div className="external-link github-link"> </div>
                        </a>
                        <a href="https://www.linkedin.com/in/evan-sabri-eyuboglu-21509bb2/">
                            <div className="external-link linkedin-link"> </div>
                        </a>
                        <a href="https://twitter.com/EyubogluSabri">
                            <div className="external-link twitter-link"> </div>
                        </a>
                    </div>
                    <div className="personal-links">
                        <a href="https://raw.githubusercontent.com/seyuboglu/sabri-site/master/data/resume.pdf">
                            <div className="text-button">
                                Resume/CV
                            </div>
                        </a>
                    </div>
                    <div className="text-section">
                        <p>
                            <b>About.</b> I'm currently a machine learning research intern
                            at <a href="https://flatiron.com/">Flatiron Health</a>. Previously, I completed my undergrad and master's 
                            at Stanford, where I worked with Jure Leskovec's 
                            <a href="https://cs.stanford.edu/~jure/"> SNAP Group</a> and 
                            the <a href="https://aimi.stanford.edu/">AIMI Center.</a>
                        </p>
                        <p>
                            <b>Research Interests.</b> I study ways to 
                            make machine learning systemsmore effective in high impact applications, like medicine and 
                            the life sciences, where data come in many forms and are often 
                            unlabeled, unstructured or otherwise imperfect. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}