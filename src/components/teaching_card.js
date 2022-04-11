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
            {link_buttons}
          </div>
          <div className="card-body-abstract">
            <b>Abstract.</b><ReadMore>{description}</ReadMore>
          </div>
        </div>
      </div>
    );
  }
}
