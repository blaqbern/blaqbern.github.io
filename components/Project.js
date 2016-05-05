import React from 'react'

function Project({ project }) {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  )
}
const { object } = React.PropTypes
Project.propTypes = { project: object }

export default Project
