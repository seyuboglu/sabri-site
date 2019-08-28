import React from 'react';

import data_home from '../data/home.json'

import ConceptCard from './card.js'

export default class HomePage extends React.Component {
    render() {
        let cards = []
        for (let i = 0; i < 2; i++) {
            cards.push(
                <ConceptCard
                    title={data_home[i]['title']}
                    image={data_home[i]['image']}
                    description={data_home[i]['description']}
                    links={data_home[i]['links']}
                    notes={data_home[i]['notes']}
                    exercises={data_home[i]['exercises']}
                    projects={data_home[i]['projects']}
                    challenges={data_home[i]['challenges']}
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