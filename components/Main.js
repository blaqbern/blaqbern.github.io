import React from 'react'
import Project from './Project'
import projects from '../content/projects'

function Main() {
  return (
    <div>
      <ul>
        {projects.map(project =>
          <li key={project.name}><Project project={project} /></li>
        )}
      </ul>
    </div>
  )
}
const { array } = React.PropTypes
Main.propTypes = { projects: array }

export default Main
