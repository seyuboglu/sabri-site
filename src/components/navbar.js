import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = { scrolled: false }
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
                <img className="navbar-image" src={require("../data/main.jpeg")} />
                <div className="navbar-info">
                    <div className="navbar-name"> Sabri Eyuboglu</div>

                    <div className="navbar-email">
                        eyuboglu <b><i>at</i></b> stanford <b><i>dot</i></b> edu
                    </div>


                    <div className="text-section">
                        <p>
                            <b>PhD candidate</b> Computer Science <br />
                        Stanford University
                        </p>
                        <p>
                            <b>B.S. + M.S.</b> Computer Science <br />
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
                    {/* <div className="personal-links">
                        <a href="https://raw.githubusercontent.com/seyuboglu/sabri-site/master/data/resume.pdf">
                            <div className="text-button">
                                📄 Resume/CV
                            </div>
                        </a>
                    </div> */}
                </div>
                <div className="navbar-about">
                    <div className="text-section">
                        <p>
                            <b>About.</b> I'm a Fourth-Year CS PhD Student in the <a href="http://ml.stanford.edu">Stanford Machine Learning Group</a> advised
                            by <a href="https://cs.stanford.edu/people/chrismre/">Chris Ré</a> and <a href="https://www.james-zou.com/">James Zou</a>. 
                            I am supported by the <a href="https://www.nsfgrfp.org/"> National Science Foundation GRFP </a>.
                        </p>
                        <p>
                            <b>Research Interests.</b> I like to develop detailed understanding of how machine learning models work and when they fail by exploring the unstructured data on which they are trained and formalizing sub-tasks with synthetics.
                            Most recently, I've been working on understanding how neural network building blocks (e.g. convolutions, attention) affect the quality and efficiency of foundation models [<a href="https://arxiv.org/abs/2304.09433">1</a>].
                            I've also had a lot of fun building tools that leverage large, pretrained models to facilitate the analysis and management of unstructured training and validation datasets [<a href="https://github.com/HazyResearch/meerkat">2</a>, <a href="https://arxiv.org/abs/2203.14960">3</a>, <a href="https://arxiv.org/abs/2304.09433">4</a>]. 
                            I'm motivated by the challenges that arise when trying to apply machine learning in safety-crticial settings like medicine and the sciences [<a href="https://www.nature.com/articles/s41467-021-22018-1">5</a>, <a href="https://cs.stanford.edu/people/sabrieyuboglu/psb-mi.pdf">6</a>]. 
                        </p>
                        <p>
                            <b>Background.</b> Previously, I was a machine learning research intern
                            at <a href="https://flatiron.com/">Flatiron Health</a>. I completed my undergrad and master's
                            at Stanford, where I worked with Jure Leskovec's
                            <a href="https://cs.stanford.edu/~jure/"> SNAP Group</a> and
                            the <a href="https://aimi.stanford.edu/">AIMI Center</a>. 
                            I'm grateful to mentors along the way including Marinka Zitnik and Jared Dunnmon who helped me navigate my early days in research. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}