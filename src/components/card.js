import React from 'react'
import { Link } from 'react-router-dom'

import ReadMore from './read_more';

export default class ConceptCard extends React.Component {
  render() {
    let {
      title,
      authors,
      venue,
      year,
      image,
      description,
      github,
      manuscript
    } = this.props

    if (! github){
      github = "https://github.com/seyuboglu"
    }
    
    var meIdx = authors.findIndex(a => a.includes("Sabri Eyuboglu"))

    return (
      <div className="concept-card">
        <div className="card-preview">
          {<img className="card-preview-image" src={require("../../" + image)}/>}
        </div>
        <div className="card-body">
          <a href={manuscript}>
            <div className="card-body-title">
              {title}
            </div>
          </a>
          <div className="card-body-authors">
            {authors.slice(0, meIdx).join(", ")} <b>{authors[meIdx]}</b>, {authors.slice(meIdx + 1).join(", ")}
          </div>
          <div className="card-body-venue">
            <i>{venue}</i>, {year} <br />
          </div>
          <div className="card-body-links">
            <a href={manuscript}>
              <div class="external-link paper-link"> </div>
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
