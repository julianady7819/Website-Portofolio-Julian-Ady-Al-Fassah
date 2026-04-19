import { listProyek } from "../data"; 
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <h1 className="text-3xl text-white font-bold mb-6 text-center">
        My Projects
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {listProyek.map((proyek) => (
          <ProjectCard key={proyek.id} proyek={proyek} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;