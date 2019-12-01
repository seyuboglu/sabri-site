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
            for (let i = 0; i < data.length; i++) {
                cards.push(
                    <ConceptCard
                        title={data[i]['title']}
                        authors={data[i]['authors']}
                        image={data[i]['image']}
                        description={data[i]['description']}
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