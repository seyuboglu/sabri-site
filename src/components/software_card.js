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
      website
    } = this.props

    if (! github){
      github = "https://github.com/seyuboglu"
    }

    return (
      <div className="concept-card">
       
        <div className="card-body">
          <a href={website}>
            <img className="banner-image" src={require("../data/" + banner)} />
          </a>
          <div className="card-body-links">
            <a href={docs}>
              <div class="text-button"> 
                Docs
              </div>
            </a>
            <a href={github}>
              <div class="external-link github-link"> </div>
            </a>
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
