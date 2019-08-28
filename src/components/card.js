import React from 'react'
import { Link } from 'react-router-dom'

export default class ConceptCard extends React.Component {
  render() {
    const {
      title,
      image,
      description,
      links,
      notes,
      exercises,
      projects,
      challenges
    } = this.props

    return (
      <div className="concept-card">
        <h1>{title}</h1>
        <ul>
          {description}
        </ul>
        <Link to={notes[0]['link']} target="_blank">{notes[0]['name']}</Link>
      </div>
    );
  }
}
