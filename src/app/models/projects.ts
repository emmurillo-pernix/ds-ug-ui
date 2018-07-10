interface ProjectByWorker {
  id: number;
  project_id: number;
  worker_id: number;
  created_at: string;
  updated_at: string;
  project: Project;
}

interface Project {
  id: number;
  name: string;
  client_id: number;
  company_id: number;
  created_at: string;
  updated_at: string;
}

export { ProjectByWorker, Project };
