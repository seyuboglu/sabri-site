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
        return (
            <div id="navbar" className={this.state.scrolled ? "navbar scroll" : "navbar"}>
                <img className="navbar-image" src="/main.jpeg" />
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
                            <b>About.</b> I'm a CS PhD Student in the <a href="http://ml.stanford.edu">Stanford Machine Learning Group</a> advised
                            by <a href="https://cs.stanford.edu/people/chrismre/">Chris Ré</a> and <a href="https://www.james-zou.com/">James Zou</a>. 
                            I am supported by the <a href="https://www.nsfgrfp.org/"> National Science Foundation GRFP </a>.
                        </p>
                        <p>
                            <b>Research Interests.</b> I'm currently working on improving LLM <i>memory</i>: the ability to store and recall large amounts of information. 
                            In particular, I'm interested in the tradeoff between cost (<i>e.g.</i> memory consumption, decoding latency and throughput) and quality. 
                             <i> How should we balance this tradeoff as we scale up the amount of information we want to remember?</i> 
                            
                        </p>
                        <p>
                            Answering questions like this one is critical for realizing more personalized, sustainable, accessible, and effective AI.   
                            To answer them, I spend a lot of time trying to understand the internals of how language models work. I do this by exploring the swaths of data on which they are trained and formulating simple synthetic tasks [<a href="https://arxiv.org/abs/2312.04927">1</a>,<a href="https://arxiv.org/abs/2402.18668">2</a>,<a href="https://openreview.net/pdf?id=2N3CtUdoB0">3</a>].
                            Informed by this understanding, I spend (probably too much) time designing new architectures (<i>e.g.</i> Based) and training them from scratch [<a href="https://arxiv.org/abs/2402.18668">4</a>,<a href="https://arxiv.org/abs/2310.12109">5</a>]. 
                            and building systems that combine multiple LLMs together with LLM-generated code to more efficiently process large amounts of information[<a href="https://arxiv.org/abs/2502.15964">6</a>,<a href="https://arxiv.org/abs/2304.09433">7</a>].
                        </p>
                        <p>
                            <b>Background.</b> In the early days of my PhD, I had a lot of fun developing techniques (<i>e.g.</i> Domino [<a href="https://arxiv.org/abs/2304.09433">8</a>], Mocha [<a href="https://facctconference.org/static/papers24/facct24-162.pdf">9</a>]) and tools (Meerkat [<a href="https://github.com/HazyResearch/meerkat">10</a>]) to help deep learning practitioners identify subtle failure modes of their models. 
                            The big idea in this line of work (which perhaps seems obvious in hindsight) was to use "foundation models" (e.g. CLIP, GPT-3), which were brand new at the time, to help analyze and wrangle unstructured validation data.
                        </p>
                        <p>
                            Prior to my PhD, my research was motivated by challenges that arise speficially when trying to apply machine learning in safety-critical settings like medicine and the sciences [<a href="https://www.nature.com/articles/s41467-021-22018-1">11</a>, <a href="https://cs.stanford.edu/people/sabrieyuboglu/psb-mi.pdf">12</a>]. 
                            I was a machine learning researcher at <a href="https://flatiron.com/">Flatiron Health</a>. 
                            I completed my undergrad and master's at Stanford, where I worked with Jure Leskovec's
                            <a href="https://cs.stanford.edu/~jure/"> SNAP Group</a> and the <a href="https://aimi.stanford.edu/">AIMI Center</a>. 
                            I'm grateful to my many mentors along the way who helped me navigate my early days in research including (but not limited to).
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

// Also, I'm excited to build towards a future where machine learning is open, transparent, and accessible. 

