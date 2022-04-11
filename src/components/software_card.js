import React from 'react'
import { Link } from 'react-router-dom'

import ReadMore from './read_more';
import ConceptCard from './card'

export default class SoftwareCard extends ConceptCard {
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

    return (
      <div className="concept-card">
       
        <div className="card-body">
          <a href={website}>
            <img className="banner-image" src={require("../data/" + banner)} />
          </a>
          <div className="card-body-links">
            {link_buttons}
          </div>
          <div className="card-body-abstract">
            <b>Abstract.</b><ReadMore>{description}</ReadMore>
          </div>
          <a href={github}>
            <div className="command-line-button">pip install {pypi}</div>
          </a>

        </div>
      </div>
    );
  }
}
