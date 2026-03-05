"use client";

import { useParams } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectPage() {

  const params = useParams();

  const project = PROJECTS.find(
    (p) => p.id === params.id
  );

  if (!project) {
    return (
      <div className="text-white p-40 text-center">
        Project not found
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}