import React, { Component } from 'react'

import ConceptCard from './card'
import TeachingCard from './teaching_card'
import Header from './header'
import Footer from './footer'


export default class HomePage extends Component {
    constructor() {
        super();
        this.state = { data: null };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/seyuboglu/sabri-site/master/data/home.json')
            .then(res => res.json())
            .then(res => this.setState({ data: res }));
    }

    render() {
        const { data } = this.state;
        let researchCards = []
        let teachingCards = []
        let projectsCards = []
        console.log("HI")
        console.log(data)
        console.log("BYE")
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
                    />
                )
            }

            // for (let i = 0; i < data["projects"].length; i++) {
            //     projectsCards.push(
            //         <ConceptCard
            //             title={data["projects"][i]['title']}
            //             authors={data["projects"][i]['authors']}
            //             venue={data["projects"][i]['venue']}
            //             year={data["projects"][i]['year']}
            //             image={data["projects"][i]['image']}
            //             description={data["projects"][i]['description']}
            //             github={data["projects"][i]['github']}
            //             manuscript={data["projects"][i]['manuscript']}
            //         />
            //     )
            // }
        }

        return (
            <div id="home-page">
                <Header/>
                <div className="concept-cards">
                    <div id="research-heading" className="section-heading research-heading"> Research </div>
                    <div id="research-cards-wrapper">
                        {researchCards}
                    </div>
                    <div id="teaching-heading" className="section-heading"> Teaching </div>
                    <div id="teaching-cards-wrapper">
                        {teachingCards}
                    </div>
                    {/* <div id="project-heading" className="section-heading"> Other Projects </div>
                    <div id="project-cards-wrapper">
                        {projectsCards}
                    </div> */}
                </div>
            </div>

        )
    }
}