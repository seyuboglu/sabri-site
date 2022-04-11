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
        this.state = { data: DATA };
    }

    render() {
        const { data } = this.state;
        let researchCards = []
        let teachingCards = []
        let projectsCards = []
        let softwareCards = []
        console.log(data)
        if (data != null) {
           // research 
            for (let i = 0; i < data["research"].length; i++) {
                researchCards.push(
                    <ConceptCard
                        title={data["research"][i]['title']}
                        authors={data["research"][i]['authors']}
                        venue={data["research"][i]['venue']}
                        year={data["research"][i]['year']}
                        image={data["research"][i]['image']}
                        description={data["research"][i]['description']}
                        github={data["research"][i]['github']}
                        manuscript={data["research"][i]['manuscript']}
                        links={data["research"][i]['links']}
                        notes={data["research"][i]['notes']}
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
                <Header/>
                <div className="concept-cards">
                    <div id="research-heading" className="section-heading research-heading"> Research </div>
                    <em id="google-scholar" className='google-scholar'> For a full list of publications, please see <a href="https://scholar.google.com/citations?user=ya1egC8AAAAJ&hl=en&authuser=1&oi=ao">Google Scholar</a>. </em>
                    <div id="research-cards-wrapper">
                        {researchCards}
                    </div>
                    <div id="software-heading" className="section-heading"> Software </div>
                    <div id="software-cards-wrapper">
                        {softwareCards}
                    </div>
                    <div id="teaching-heading" className="section-heading"> Teaching </div>
                    <div id="teaching-cards-wrapper">
                        {teachingCards}
                    </div>
                    
                    
                </div>
            </div>

        )
    }
}