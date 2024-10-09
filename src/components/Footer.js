import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import projectList from '../content/ProjectList';
import { ProjectContext } from './Context';

export default function Footer() {

    let projectId = useContext(ProjectContext)

    let previousProject;
    let nextProject;
    let displayPrevious = {}
    let displayNext = {}

    console.log(projectList.length)

    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].id === projectId) {
            if (projectList.indexOf(projectList[i]) === 0) {
                nextProject = "../" + projectList[i + 1].id
                displayPrevious = { display: "none" }

            } else if (projectList.indexOf(projectList[i]) > 0 && projectList.indexOf(projectList[i]) < projectList.length - 1) {
                previousProject = "../" + projectList[i - 1].id
                nextProject = "../" + projectList[i + 1].id
            } else if (projectList.indexOf(projectList[i]) === projectList.length - 1) {
                previousProject = "../" + projectList[i - 1].id
                displayNext = { display: "none" }
            }

        }
    };
    return (
        <footer>
            <div className="footer">
                <p itemID='voltar'>
                    <Link style={displayPrevious} to={previousProject} key={previousProject}>&lt; anterior</Link>
                </p>
                <p itemID='proximo'>
                    <Link style={displayNext} to={nextProject} key={nextProject}>próximo &gt;</Link>
                </p>
            </div>
        </footer>
    )
}
