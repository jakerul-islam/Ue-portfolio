import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'

export const ProjectsPage =async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
  const projects = await res.json()
  console.log(projects, 'from projects page')
  return (
    <div className='container mx-auto'>

      <h2 className='font-extrabold text-4xl text-center my-3'>Our Projects</h2>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {
        projects.map(project => <ProjectsCard project={project} key={project._id}></ProjectsCard>)
      }
     </div>
    </div>
  )
}
export default ProjectsPage