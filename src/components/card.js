import React from 'react'
import { Link } from 'react-router-dom'

import ReadMore from './read_more';

export default class ConceptCard extends React.Component {
  render() {
    let {
      title,
      authors,
      venues,
      image,
      description,
      github,
      manuscript,
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

    let venues_elements = []
    for (let i=0; i<venues.length; i++){
      let venue = venues[i]
      let note_tags = []
      for (let i=0; i<venue.notes.length; i++){
        note_tags.push(
          <span className='note-tag'>
            {venue.notes[i]}
          </span>
        ) 
      }
      venues_elements.push(
        <div className="card-body-venue">
          <i>{venue.name}</i> {venue.year != "" ? ", " + venue.year : ""}  {note_tags} <br />
        </div>
      )
    }
    
    var meIdx = authors.findIndex(a => a.includes("Sabri Eyuboglu"))

    return (
      <div className="concept-card">
        <div className="card-body">
          <a href={manuscript}>
            <div className="card-body-title">
              {title}
            </div>
          </a>
          <div className="card-body-authors">
            {meIdx != 0 ? authors.slice(0, meIdx).join(", ") + "," : ""} <b>{authors[meIdx]}</b>{meIdx != authors.length - 1 ? "," : "" } {authors.slice(meIdx + 1).join(", ")}
          </div>
          {venues_elements}
          <div className="card-body-links">
            <a href={manuscript}>
              <div class="text-button">📄 Paper </div>
            </a>
            <a href={github}>
              <div class="text-button">💻 GitHub </div>
            </a>
            {link_buttons}
          </div>
          <div className="card-body-abstract">
            <b>tl;dr</b>       {description}
          </div>
        </div>
      </div>
    );
  }
}
