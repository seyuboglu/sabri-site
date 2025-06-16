import React from 'react'
import { Link } from 'react-router-dom'

import ReadMore from './read_more';
import ConceptCard from './card'

export default class SoftwareCard extends ConceptCard {
  constructor(props) {
    super(props);
    this.state = {
      stars: null
    };
  }

  componentDidMount() {
    if (this.props.github) {
      const repo = this.props.github.split('github.com/')[1];
      fetch(`https://api.github.com/repos/${repo}`)
        .then(response => response.json())
        .then(data => {
          this.setState({stars: data.stargazers_count});
        })
        .catch(error => console.error('Error fetching stars:', error));
    }
  }

  render() {
    let {
      title,
      banner, 
      description,
      github,
      docs,
      pypi,
      website,
      links
    } = this.props

    if (! github){
      github = "https://github.com/seyuboglu"
    }

    let link_buttons = []

    for (const [key, value] of Object.entries(links)){
      link_buttons.push(
        <a href={value}>
          <div class="text-button"> 
            {key}
          </div>
        </a>
      )
    }

    if (this.state.stars !== null) {
      link_buttons.push(
        <a href={`${github}/stargazers`}>
          <div class="text-button">
            ⭐ <span class="stargazers-count">{this.state.stars}</span>
          </div>
        </a>
      )
    }

    return (
      <div className="concept-card">
        <div className="card-body">
          <div className="software-card-body-title">
            {title}
          </div>
          <div className="card-body-links">
            {link_buttons}
          </div>
          <div className="card-body-abstract">
            <b>tl;dr</b>       {description}
          </div>
          {/* <a href={github}>
            <div className="command-line-button">pip install {pypi}</div>
          </a> */}
        </div>
        <a href={website} className="banner-image-container">
          <img className="banner-image" src={require("../data/" + banner)} />
        </a>
      </div>
    );
  }
}
