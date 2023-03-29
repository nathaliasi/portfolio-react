import React from 'react'
import{
  DiHtml5,
  DiSass,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiJava,
} from 'react-icons/di';
import '../styles/components/tecnologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "sass", name: "SASS", icon: < DiSass /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "java", name: "Java", icon: <DiJava /> }
];

const TecnologiesContainer = () => {
  return (
   <section className='tecnologies-container'>
    <h2>
      Skills
    </h2>
    <div className='tecnologies-grid'>
    {technologies.map((tech) => (
      <div className='tecnology-card' id={tech.id} key={tech.id}>
        {tech.icon}
        <div className='tecnology-info'>
          <h3>{tech.name}</h3>
        </div>
      </div>
    ))}

    </div>
   </section>
  )
}

export default TecnologiesContainer
