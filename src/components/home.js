import React, { Component } from 'react'

import ConceptCard from './card'
import NavBar from './navbar'
import Sidebar from './sidebar'
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
           // research 
            for (let i = 0; i < data["research"].length; i++) {
                cards.push(
                    <ConceptCard
                        title={data["research"][i]['title']}
                        authors={data["research"][i]['authors']}
                        venue={data["research"][i]['venue']}
                        year={data["research"][i]['year']}
                        image={data["research"][i]['image']}
                        description={data["research"][i]['description']}
                    />
                )
                
            }
        }

        return (
            <div id="home-page">
                <Header/>
                <div className="section-heading"> Research </div>
                <div id="concept-cards-wrapper">
                    {cards}
                </div>
                <Footer/>
            </div>

        )
    }
}