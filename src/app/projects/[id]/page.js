import { PROJECTS } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }) {

  const { id } = await params;

  const project = PROJECTS.find(
    (p) => p.id === id
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