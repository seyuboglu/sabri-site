import React, { Component } from 'react'

import ConceptCard from './card'
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
                    />
                )
            }

            for (let i = 0; i < data["teaching"].length; i++) {
                teachingCards.push(
                    <ConceptCard
                        title={data["teaching"][i]['title']}
                        authors={data["teaching"][i]['authors']}
                        school={Curitiba, Brasil}
                        year={data["teaching"][i]['year']}
                        image={data["teaching"][i]['image']}
                        description={data["teaching"][i]['description']}
                        github={data["teaching"][i]['github']}
                    />
                )
            }
        }

        return (
            <div id="home-page">
                <Header/>
                <div className="section-heading"> Research </div>
                <div id="concept-cards-wrapper">
                    {researchCards}
                    {teachingCards}
                </div>
                <Footer/>
            </div>

        )
    }
}