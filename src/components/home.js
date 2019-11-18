import React, { Component } from 'react'

import ConceptCard from './card'
import NavBar from './navbar'
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

        let cards = []
        if (data != null) {
            for (let i = 0; i < data.length; i++) {
                cards.push(
                    <ConceptCard
                        title={data[i]['title']}
                        image={data[i]['image']}
                        description={data[i]['description']}
                        objectives={data[i]['objectives']}
                        challenges={data[i]['challenges']}
                        links={data[i]['links']}
                        notes={data[i]['notes']}
                        slides={data[i]['slides']}
                        exercises={data[i]['exercises']}
                        projects={data[i]['projects']}
                        challenges={data[i]['challenges']}
                    />
                )
                
            }
        }

        return (
            <div id="home-page">
                <Header/>
                <div id="concept-cards-wrapper">
                    {cards}
                </div>
                <Footer/>
            </div>

        )
    }
}