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
      manuscript,
      notes,
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

    let note_tags = []
    for (let i=0; i<notes.length; i++){
      note_tags.push(
        <span  className='note-tag'>
          {notes[i]}
        </span>
      ) 
    }
    
    var meIdx = authors.findIndex(a => a.includes("Sabri Eyuboglu"))

    return (
      <div className="concept-card">
        <div className="card-preview">
          {<img className="card-preview-image" src={"https://raw.githubusercontent.com/seyuboglu/sabri-site/master/" + image}/>}
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
            <i>{venue}</i>, {year}  {note_tags} <br />
          </div>
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
            <b>Abstract.</b><ReadMore>{description}</ReadMore>
          </div>
        </div>
      </div>
    );
  }
}
