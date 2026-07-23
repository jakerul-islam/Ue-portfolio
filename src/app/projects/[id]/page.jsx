import ProjectDetails from "@/components/ProjectDetails";
import React from "react";

export const ProjectDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`,
  );
  const project = await res.json();
  console.log(project, "from details page");
  return (
    <div className="contain mx-auto">
     <ProjectDetails project={project}></ProjectDetails>
    </div>
  );
};
export default ProjectDetailPage;
