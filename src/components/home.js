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
        fetch('https://raw.githubusercontent.com/geoffreyangus/md-ml/master/data/home.json')
            .then(res => res.json())
            .then(res => this.setState({ data: res }));
    }

    render() {
        const { data } = this.state;

        let cards = []
        if (data != null) {
            for (let i = 0; i < 2; i++) {
                cards.push(
                    <ConceptCard
                        title={data[i]['title']}
                        image={data[i]['image']}
                        description={data[i]['description']}
                        links={data[i]['links']}
                        notes={data[i]['notes']}
                        exercises={data[i]['exercises']}
                        projects={data[i]['projects']}
                        challenges={data[i]['challenges']}
                    />
                )
            }
        }

        return (
            <div>
                <Header/>
                <div id="navbar-wrapper">
                    <NavBar />
                </div>
                <div id="concept-cards-wrapper">
                    {cards}
                </div>
                <Footer/>
            </div>

        )
    }
}