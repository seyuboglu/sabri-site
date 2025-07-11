import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Citation, { resetCitationCounter } from './Citation'

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = { scrolled: false }
    }

    componentDidMount() {
        // Reset citation counter when component mounts
        resetCitationCounter();
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
                            <b>Research Interests.</b> I'm currently working on improving LLM <i>memory</i>, the ability of a model to store and recall large amounts of user-provided information. 
                            In particular, I'm interested in the tradeoff between cost (<i>e.g.</i> memory consumption, decoding latency and throughput) and quality. 
                             <i> How should we balance this tradeoff as we scale up the amount of information we want to remember?</i> 
                            
                        </p>
                        <p>
                            Answering this question is critical for realizing more personalized, sustainable, accessible, and effective AI.   
                            In an effort to answer it, I've spent a lot of time trying to understand the internals of how language models work. 
                            I do this by exploring the swaths of data on which they are trained and formulating simple synthetic tasks [<Citation cardId="zoology" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />,<Citation cardId="based" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />,<Citation cardId="layer-looping" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />].
                            Informed by this understanding, I spend (probably too much) time designing new architectures (<i>e.g.</i> Based) and training them from scratch [<Citation cardId="based" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />,<Citation cardId="monarch-mixer" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />].  
                            Most recently, I've shown how we can store memories in far more space-efficiently using test-time training [<Citation cardId="cartridges" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />].
                            I also have spent time developing LLM-systems that can efficiently process large amounts of information by combining multiple LLMs and LLM-generated code [<Citation cardId="minions" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />,<Citation cardId="evaporate" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />].
                        </p>
                        <p>
                            <b>Background.</b> In the early days of my PhD, I had a lot of fun developing techniques (<i>e.g.</i> Domino [<Citation cardId="domino" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />], Mocha [<Citation cardId="model-changelists" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />]) and tools (Meerkat [<Citation cardId="meerkat" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />]) to help deep learning practitioners identify subtle failure modes of their models. 
                            The big idea in this line of work was to use "foundation models" (e.g. CLIP, GPT-3), which were brand new at the time, to help analyze and wrangle unstructured validation data.
                        </p>
                        <p>
                            Prior to my PhD, my research focused on applying machine learning in safety-critical settings like medicine and the sciences [<Citation cardId="pet-ct" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />, <Citation cardId="mutual-interactors" onHover={this.props.setHighlightedCard} onLeave={this.props.clearHighlightedCard} showAllPapers={this.props.showAllPapers} togglePapersView={this.props.togglePapersView} researchData={this.props.researchData} />]. 
                            I was a machine learning researcher at <a href="https://flatiron.com/">Flatiron Health</a> for a year. 
                            Before that, I completed my undergrad and master's at Stanford, where I worked with Jure Leskovec's
                            <a href="https://cs.stanford.edu/~jure/"> SNAP Group</a> and the <a href="https://aimi.stanford.edu/">AIMI Center</a>. 
                            I'm grateful to my many mentors along the way who helped me navigate my early days in research.
                        </p>
                        <p>
                            <b>Notes.</b> I serve as an advisor to <a href="https://cartesia.ai">Cartesia</a>, a startup led by labmates that is applying <a href="https://cartesia.ai/research">some of our research</a> to the problem of delivering real-time AI. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

// Also, I'm excited to build towards a future where machine learning is open, transparent, and accessible. 

