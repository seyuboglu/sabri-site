import './App.css';
import React, { Component } from 'react';

import ConceptCard from './components/card'

export default class App extends Component {
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
        {cards}
      </div>
    )
  }
}