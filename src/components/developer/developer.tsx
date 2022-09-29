import { OnlyCards } from './styles'
import axios from 'axios'
import { useEffect, useState,  React } from 'react'
import ProjectCard from '../project-card/project-card'
import { Skeleton } from "@mui/material";

const Developer: React.FC = () => {
  const [developerProjects, setDeveloperProjects] = useState<Card[]>([])

  useEffect(() => {
    axios
      .get('http://www.localhost:5000/developer')
      .then(projects => setDeveloperProjects(projects.data))
  }, [])

  return (
    <OnlyCards>
      {!developerProjects && (
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      )}
      {developerProjects &&
        developerProjects.map((project: Card) => {
          return (
            <ProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
              preview={project.preview}
            />
          )
        })}
    </OnlyCards>
  )
}
export default Developer
