import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaCheckCircle, FaGithub, FaTag, FaUser } from "react-icons/fa";

export const ProjectDetails = ({ project }) => {
   
  const {
    _id,
    title,
    category,
    thumbnail,
    shortDescription,
    techStack,
    projectUrl,
    status,
  } = project;
  return (
  <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>

        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.category && (
              <span className="bg-cyan-950/60 text-cyan-400 text-xs font-semibold px-3.5 py-1 rounded-full border border-cyan-800/50">
                {project.category}
              </span>
            )}
            {project.status && (
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                project.status === 'Completed' 
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/50' 
                  : 'bg-amber-950/60 text-amber-400 border-amber-800/50'
              }`}>
                {project.status}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          {project.shortDescription && (
            <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
          )}
        </div>

        {/* Thumbnail Image */}
        {project.thumbnail && (
          <div className="relative w-full h-64 sm:h-[450px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Main Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
         
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            {project.fullDescription && (
              <section className="bg-[#0F141C] border border-slate-800/90 p-6 sm:p-8 rounded-3xl space-y-4">
                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                  Project Overvie
                </h2>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {project.fullDescription}
                </p>
              </section>
            )}

            {/* Features Array */}
            {project.features && project.features.length > 0 && (
              <section className="bg-[#0F141C] border border-slate-800/90 p-6 sm:p-8 rounded-3xl space-y-4">
                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                  Key Features & Capabilities
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-slate-300 gap-2.5">
                      <FaCheckCircle className="text-cyan-400 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech Stack Array */}
            {project.techStack && project.techStack.length > 0 && (
              <section className="bg-[#0F141C] border border-slate-800/90 p-6 sm:p-8 rounded-3xl space-y-4">
                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#080B10] border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column (4 cols): Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0F141C] border border-slate-800/90 p-6 rounded-3xl space-y-6 sticky top-8">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                Project Details
              </h3>

              <div className="space-y-4 text-sm">
                {/* Client */}
                {project.client && (
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-9 h-9 bg-cyan-400/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                      <FaUser />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-medium">Client</p>
                      <p className="font-semibold text-white">{project.client}</p>
                    </div>
                  </div>
                )}

                {/* Completion Date */}
                {project.completedAt && (
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-9 h-9 bg-cyan-400/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                      <FaCalendarAlt />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-medium">Completed</p>
                      <p className="font-semibold text-white">{project.completedAt}</p>
                    </div>
                  </div>
                )}

                {/* Category */}
                {project.category && (
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-9 h-9 bg-cyan-400/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                      <FaTag />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-medium">Category</p>
                      <p className="font-semibold text-white">{project.category}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-400/10 text-xs uppercase tracking-wider"
                  >
                    <FaGithub className="text-base" /> View Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#080B10] hover:bg-slate-900 text-slate-200 border border-slate-800 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-wider"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
};
export default ProjectDetails;
