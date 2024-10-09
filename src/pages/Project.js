import React, { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectList from "../content/ProjectList"
import ProjectContent from '../components/ProjectContent';
import Footer from '../components/Footer';
import ProjectInfo from '../components/ProjectInfo'
import { ProjectContext } from '../components/Context'

export default function Project() {
  let url = useParams().url
  
  let projectId
  let projectContent

  projectList.forEach(project => {
    if (project.id === url) {
      projectId = project.id
      projectContent = project.content
    }
  });

  return (
    <ProjectContext.Provider value={projectId}>
      <div className='grid-interna'>
        <ProjectInfo />
        <ProjectContent />
      </div>
      <Footer />
    </ProjectContext.Provider>
  )
}