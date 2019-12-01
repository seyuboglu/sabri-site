import React from 'react'
import { Link } from 'react-router-dom'

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
      image,
      description
    } = this.props
    links = this.convert_to_links(links, false)
    challenges = this.convert_to_links(challenges, false)
    slides = this.convert_to_links(slides, false, true)

    notes = this.convert_to_links(notes, true)
    exercises = this.convert_to_links(exercises, false)
    projects = this.convert_to_links(projects, false)


    return (
      <div className="concept-card">
        <div className="card-preview">
          {/* <img className="card-preview-image" src={"https://raw.githubusercontent.com/geoffreyangus/md-ml/master/" + image}/> */}
          <div>
            {description}
          </div>
          <div className="card-preview-objectives">
            <b>Learning Objectives:</b>
            <ol>
              {objectives.map(objective => <li>{objective}</li>)}
            </ol>
          </div>
          {links !== undefined && links.length !== 0 ?
            <div>
              <b>Useful Links:</b>
              <ul>
                {links.map(link => <li>{link}</li>)}
              </ul>
            </div> :
            <div></div>
          }
          {challenges !== undefined && challenges.length !== 0 ?
            <div>
              <b>Challenges:</b>
              <ul>
                {challenges.map(challenge => <li>{challenge}</li>)}
              </ul>
            </div> :
            <div></div>
          }
        </div>
        <div className="card-body">
          <div className="card-body-title">
            {title}
          </div>
          /* 
          <div className="card-materials">
            <div className="card-materials-notes">
              <div className="card-materials-title">Notes</div>
              {notes}
            </div>
            <div className="card-materials-assignments">
              <div className="card-materials-title">Exercises</div>
              {exercises}
            </div>
            <div className="card-materials-assignments">
              <div className="card-materials-title">Projects</div>
              {projects}
            </div>
          </div>
          */
        </div>
      </div>
    );
  }
}
