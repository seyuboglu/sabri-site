import React from 'react'
import { Link } from 'react-router-dom'

export default class ConceptCard extends React.Component {
  convert_to_links(links) {
    if (links) {
      links = links.map(link => <Link to={link['link']}>{link['name']}</Link>)
    }
    return links
  }

  render() {
    let {
      title,
      image,
      description,
      objectives,
      links,
      notes,
      exercises,
      projects,
      challenges,
    } = this.props

    links = this.convert_to_links(links)
    challenges = this.convert_to_links(challenges)

    notes = this.convert_to_links(notes)
    exercises = this.convert_to_links(exercises)
    projects = this.convert_to_links(projects)


    return (
      <div className="concept-card">
        <div className="card-preview">
          <img className="card-preview-image" src={"https://raw.githubusercontent.com/geoffreyangus/md-ml/master/" + image}/>
          <div>
            {description}
          </div>
          <div className="card-preview-objectives">
            <b>Learning Objectives:</b>
            <ol>
              {objectives.map(objective => <li>{objective}</li>)}
            </ol>
          </div>
          {links !== undefined ?
            <div>
              <b>Useful Links:</b>
              <ul>
                {links.map(link => <li>{link}</li>)}
              </ul>
            </div> :
            <div></div>
          }
          {challenges !== undefined ?
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
        </div>
      </div>
    );
  }
}
