import React, { useState } from 'react';
import '../App.css';
import {
    Link
} from "react-router-dom";
import projectList from "../content/ProjectList"

export default function MainGrid() {
    
    const projectPreview = projectList.map(project =>
        <Link
            to={project.id}
            className="grid-item"
            key={project.id}
        >
            <div
                className='grid-img'>
                <img
                    src={project.img}
                    alt={project.id}
                />
            </div>
            <div
                className='grid-txt'>
                <p>
                    <span>
                        {project.name}
                    </span>
                </p>
            </div>
        </Link>
    )

    return (
        <div className='grid'>
            {projectPreview}
        </div>
    )
}