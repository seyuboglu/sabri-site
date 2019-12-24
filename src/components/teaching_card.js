import React from 'react'
import { Link } from 'react-router-dom'

import ReadMore from './read_more';
import ConceptCard from './card'

export default class TeachingCard extends ConceptCard {
  render() {
    let {
      title,
      organization,
      school,
      year,
      image,
      description,
      github,
      website
    } = this.props

    if (! github){
      github = "https://github.com/seyuboglu"
    }

    return (
      <div className="concept-card">
       
        <div className="card-body">
          <a href={website}>
            <div className="card-body-title">
                {title}
            </div>
          </a>
          <div className="card-body-authors">
            {organization}
          </div>
          <div className="card-body-venue">
            <i>{school}</i> 
          </div>
          <div className="card-body-venue">
            {year} <br />
          </div>
          <div className="card-body-links">
            <a href={website}>
              <div class="text-button"> 
                Course Website
              </div>
            </a>
            <a href={github}>
              <div class="external-link github-link"> </div>
            </a>
          </div>
          <div className="card-body-abstract">
            <b>Abstract.</b><ReadMore>{description}</ReadMore>
          </div>
        </div>
      </div>
    );
  }
}
