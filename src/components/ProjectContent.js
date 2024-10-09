import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import projectList from "../content/ProjectList"
import { ProjectContext } from './Context';


export default function ProjectContent() {

    let projectId = useContext(ProjectContext)
    let projectContent

    projectList.forEach(project => {
        if (project.id === projectId) {
            projectContent = project.content.content
        }
    });

    const projectContentHTML = projectContent.map(item => {
        if (item.type === "p") {
            return (
                <p>{item.text}</p>
            )
        } if (item.type === "h3") {
            return (
                <h3>{item.text}</h3>
            )
        } if (item.type === "img") {
            return (
                <div className='conteudo-foto'>
                    <img className="img-desk" src={item.imgDesk} alt='' />
                    <img className="img-mobile" src={item.imgMob} alt='' />
                    <p class="legenda-foto">{item.text}</p>
                </div>
            )
        } if (item.type === "video") {
            return (
            <div className='conteudo-foto'>
                <video type="video/mp4" controls loop muted className="img-desk" src={item.imgDesk}/>
                <video type="video/mp4" controls loop muted className="img-mobile" src={item.imgMob}/>
            </div>
            )
        } if (item.type === "expediente") {
            return (
                <div className='expediente'>
                    <p>{item.text}</p>
                </div>
            )
        }
    })

    return (
        projectContentHTML
    )

}