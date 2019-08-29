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

    notes = notes.map(note => <Link to={note['link']}>{note['name']}</Link>)
    exercises = exercises.map(exercise => <Link to={exercise['link']}>{exercise['name']}</Link>)
    projects = projects.map(project => <Link to={project['link']}>{project['name']}</Link>)

    return (
      <div className="concept-card">
        <div className="card-preview">
          <img className="card-preview-image" src={"https://raw.githubusercontent.com/geoffreyangus/md-ml/master/" + image}/>
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
