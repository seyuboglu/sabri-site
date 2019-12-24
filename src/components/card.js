import React from 'react'
import { Link } from 'react-router-dom'

import ReadMore from './read_more';

export default class ConceptCard extends React.Component {
  convert_to_links(links, is_internal, is_slides=false) {
    if (links) {
      if (is_internal) {
        links = links.map(link => <Link to={link['link']}>{link['name']}</Link>)
      }
      else {
        if (is_slides) {
          links = links.map(link => <a href={"https://docs.google.com/viewer?url="+link['link']} target='_blank'>{link['name']}</a>)
        }
        else {
          links = links.map(link => <a href={link['link']} target='_blank'>{link['name']}</a>)
        }
      }
    }
    return links
  }

  render() {
    let {
      title,
      authors,
      venue,
      year,
      image,
      description,
      github
    } = this.props

    if (! github){
      github = "https://github.com/seyuboglu"
    }

    return (
      <div className="concept-card">
        <div className="card-preview">
          {<img className="card-preview-image" src={"https://raw.githubusercontent.com/seyuboglu/sabri-site/master/" + image}/>}
        </div>
        <div className="card-body">
          <div className="card-body-title">
            {title}
          </div>
          <div className="card-body-authors">
            {authors}
          </div>
          <div className="card-body-venue">
            <i>{venue}</i>, {year} <br />
          </div>
          <div className="card-body-links">
            <a href="https://raw.githubusercontent.com/seyuboglu/sabri-site/master/data/resume.pdf">
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
