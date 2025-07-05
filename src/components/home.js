import React, { Component } from 'react'

import ConceptCard from './card'
import TeachingCard from './teaching_card'
import SoftwareCard from './software_card'
import Header from './header'
import Footer from './footer'
import { DATA } from '../data/home'


export default class HomePage extends Component {
    constructor() {
        super();
        this.state = { 
            data: DATA,
            showAllPapers: false
        };
    }

    togglePapersView = () => {
        this.setState(prevState => ({
            showAllPapers: !prevState.showAllPapers
        }));
    }

    render() {
        const { data, showAllPapers } = this.state;
        let researchCards = []
        let teachingCards = []
        let projectsCards = []
        let softwareCards = []
        console.log(data)
        if (data != null) {
            // research - filter based on pinned status and showAllPapers state
            const papersToShow = showAllPapers 
                ? data["research"] 
                : data["research"].filter(paper => paper.pinned === true);
            
            for (let i = 0; i < papersToShow.length; i++) {
                researchCards.push(
                    <ConceptCard
                        key={i}
                        title={papersToShow[i]['title']}
                        authors={papersToShow[i]['authors']}
                        venues={papersToShow[i]['venues']}
                        image={papersToShow[i]['image']}
                        description={papersToShow[i]['description']}
                        github={papersToShow[i]['github']}
                        manuscript={papersToShow[i]['manuscript']}
                        links={papersToShow[i]['links']}
                    />
                )
            }

            for (let i = 0; i < data["teaching"].length; i++) {
                teachingCards.push(
                    <TeachingCard
                        title={data["teaching"][i]['title']}
                        organization={data["teaching"][i]['organization']}
                        school={data["teaching"][i]['school']}
                        year={data["teaching"][i]['year']}
                        image={data["teaching"][i]['image']}
                        description={data["teaching"][i]['description']}
                        github={data["teaching"][i]['github']}
                        website={data["teaching"][i]['website']}
                        links={data["teaching"][i]['links']}
                    />
                )
            }

            for (let i = 0; i < data["software"].length; i++) {
                softwareCards.push(
                    <SoftwareCard
                        title={data["software"][i]['title']}
                        banner={data["software"][i]['banner']}
                        description={data["software"][i]['description']}
                        github={data["software"][i]['github']}
                        website={data["software"][i]['website']}
                        pypi={data["software"][i]['pypi']}
                        docs={data["software"][i]['docs']}
                        links={data["software"][i]['links']}
                    />
                )
            }




        }

        return (
            <div id="home-page">
                <Header />
                <div className="concept-cards">
       
                    <div id="research-heading" className="section-heading research-heading"> Research </div>
                    <div className="research-controls">
                        <div className="papers-top-toggle-container">
                            <button 
                                className={`papers-top-toggle-button ${!showAllPapers ? 'active' : ''}`}
                                onClick={this.togglePapersView}
                            >
                                Highlights
                            </button>
                            <button 
                                className={`papers-top-toggle-button ${showAllPapers ? 'active' : ''}`}
                                onClick={this.togglePapersView}
                            >
                                All
                            </button>
                        </div>
                        <em id="google-scholar" className='google-scholar'> For a full list of publications, please see <a href="https://scholar.google.com/citations?user=ya1egC8AAAAJ&hl=en&authuser=1&oi=ao">Google Scholar</a>. </em>
                    </div>
                    <div id="research-cards-wrapper">
                        {researchCards}
                    </div>
                    <div className="papers-toggle-container">
                        <button 
                            className="papers-toggle-button"
                            onClick={this.togglePapersView}
                        >
                            {showAllPapers ? '▲ Show highlights' : '▼ Show all'}
                        </button>
                    </div>

                    <div id="software-heading" className="section-heading"> Software </div>
                    <div id="software-cards-wrapper" className="horizontal-section">
                        {softwareCards}
                    </div>



                    {/* <div id="teaching-heading" className="section-heading"> Teaching </div>
                    <div id="teaching-cards-wrapper">
                        {teachingCards}
                    </div> */}


                </div>
            </div>

        )
    }
}