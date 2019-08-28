import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import ConceptCard from './card.js'

export default class HomePage extends Component {
    componentDidMount() {
        fetch(this.props.link)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        const { data } = this.state;

        let cards = []
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
        return (
            <div>
                {cards}
            </div>
        )
    }
}