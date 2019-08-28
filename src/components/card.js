import React from 'react';

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
        <a href={notes[0]['link']} target="_blank">{notes[0]['name']}</a>
      </div>
    );
  }
}
