import React, { useContext, useEffect, useMemo, useState } from 'react';
import projectList from "../content/ProjectList"
import { ProjectContext } from './Context';

export default function ProjectContent() {

    let projectInfo
    let projectId = useContext(ProjectContext)

    projectList.forEach(project => {
        if (project.id === projectId) {
            projectInfo = project.content.info
        }
    });
    console.log(projectInfo)

    return (
        <>
            <div className="imagem-capa">
                <img className='img-desk' src={projectInfo.imgDesk} alt='' />
                <img className='img-mobile' src={projectInfo.imgMob} alt='' />
            </div>
            <h2 className='titulo'>{projectInfo.h2}</h2>
            <a className='data link-ext' href={projectInfo.externalLink} target="_blank" rel="noopener noreferrer"><p>{projectInfo.company} — {projectInfo.year}</p></a>
        </>
    )

}