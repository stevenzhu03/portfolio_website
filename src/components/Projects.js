import React from 'react';
import ProjectCard from './ProjectCard'

const Projects = props => {

    return (
        <div className="projects">
            <h1>Projects</h1>

            <div className="project-cards">
                <ProjectCard/>
                
            </div>
        </div>
    )
    
}

export default Projects