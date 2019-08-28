import React from 'react'
import { Link } from 'react-router-dom'

export default class ConceptCard extends React.Component {
  render() {
    let {
      title,
      image,
      description,
      links,
      notes,
      exercises,
      projects,
      challenges,
    } = this.props

    notes = notes.map(note => <div><Link to={note['link']}>{note['name']}</Link></div>)
    exercises = exercises.map(exercise => <div><Link to={exercise['link']}>{exercise['name']}</Link></div>)
    projects = projects.map(project => <div><Link to={project['link']}>{project['name']}</Link></div>)

    return (
      <div className="concept-card">
        <div className="card-preview">
          <div className="card-preview-image">
            <img src={"https://raw.githubusercontent.com/geoffreyangus/md-ml/master/" + image}/>
          </div>
          <div>
            {description}
          </div>
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
