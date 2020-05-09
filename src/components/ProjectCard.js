import React from 'react';

const ProjectCard = props => {

    return (
        <div className="project-card">
            <img src ="https://c402277.ssl.cf1.rackcdn.com/photos/18366/images/carousel_small/Asian_Elephants_WW252891.jpg?1576701543" alt="something"/>

            <p>Name of Porject</p>

            <div className="project-card-icons">
                <img alt="github"/>
                <img alt="live-version"/>
            </div>

            <div className="project-card-overlay">
                <p> Description </p>
                <p> Techonologies Used</p>
            </div>
        </div>
    )
}

export default ProjectCard