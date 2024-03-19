import React from 'react'
import HeadingWrappper from '../containers/HeadingWrappper'
import { SiPolywork } from 'react-icons/si'
import ProjectCard from './ProjectCard'

const ProjectsContainer = () => {
  const projects = [
    {
      id: 1,
      title: "Freelance Design",
      status: "Building",
      description: "7 years as an entrepreneur takeaway ",
      link: "dsfkfjdklfdjk",
    },
    {
      id: 1,
      title: "Freelance Design",
      status: "Building",
      description: "7 years as an entrepreneur takeaway ",
      link: "dsfkfjdklfdjk",
    },
    {
      id: 1,
      title: "Freelance Design",
      status: "Building",
      description: "7 years as an entrepreneur takeaway ",
      link: "dsfkfjdklfdjk",
    },
    {
      id: 1,
      title: "Freelance Design",
      status: "Building",
      description: "7 years as an entrepreneur takeaway ",
      link: "dsfkfjdklfdjk",
    },
  ]
  return (
    <>
      <div className="divider"></div>
      <div className='mx-[15px] mt-3 mb-14 md:mx-[130px] lg:mx-[350px] pb-40 lg:pb-5'>
        <HeadingWrappper title={"Projects"} icon={<SiPolywork />} />
        <ul className="space-y-4">
        {
          projects.map(item => <ProjectCard key={item?.id} item={item} />)
        }
        </ul>
      </div>
    </>
  )
}

export default ProjectsContainer