import Link from 'next/link'
import React from 'react'

export const ProjectsCard = ({project}) => {
    console.log(project ,'from project card')
  return (
  <div className="card bg-slate-500 shadow-sm">
  <figure>
    <img
      src={project?.thumbnail}
      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      alt={project?.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {project?.title}
      <div className="badge badge-secondary w-auto h-auto">{project?.
category}</div>
    </h2>
    <p>{project?.shortDescription}</p>
    <div className="card-actions justify-between items-center">
     
      <div className="badge badge-outline">{project?.status}</div>

     <Link href={`/projects/${project._id}`}> <button className='btn btn-outline'>Details</button></Link>
    </div>
  </div>
</div>
  )
}
export default ProjectsCard