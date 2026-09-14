import { achievements, experienceTimeline, portfolioKnowledge, profile, projectKnowledge, skillCategories } from '../knowledge';

export type PortfolioToolName = 'get_profile' | 'get_experience' | 'get_skills' | 'get_projects' | 'get_project_details' | 'search_portfolio' | 'get_resume' | 'get_contact_information' | 'get_github_projects';

export const portfolioTools = {
  get_profile: () => profile,
  get_experience: () => experienceTimeline,
  get_skills: () => skillCategories,
  get_projects: () => projectKnowledge,
  get_project_details: (projectName: string) => projectKnowledge.find((project) => project.name.toLowerCase().includes(projectName.toLowerCase())) ?? null,
  search_portfolio: (query: string) => {
    const searchable = JSON.stringify(portfolioKnowledge).toLowerCase();
    return searchable.includes(query.toLowerCase()) ? portfolioKnowledge : null;
  },
  get_resume: () => ({ experience: profile.experience, education: achievements.education, certifications: achievements.certifications, awards: achievements.awards }),
  get_contact_information: () => ({ email: profile.email, linkedin: profile.linkedin, github: profile.github, location: profile.location }),
  get_github_projects: () => ({ profile: profile.github, note: 'Public GitHub repositories can be explored from Bipin\'s GitHub profile.' }),
};

export function selectPortfolioTool(query: string): PortfolioToolName {
  const normalized = query.toLowerCase();
  if (normalized.includes('contact') || normalized.includes('email') || normalized.includes('linkedin')) return 'get_contact_information';
  if (normalized.includes('resume') || normalized.includes('certification') || normalized.includes('award')) return 'get_resume';
  if (normalized.includes('github') || normalized.includes('repository')) return 'get_github_projects';
  if (normalized.includes('skill') || normalized.includes('technology') || normalized.includes('tech stack')) return 'get_skills';
  if (normalized.includes('project') || normalized.includes('musafir')) return 'get_projects';
  if (normalized.includes('experience') || normalized.includes('career') || normalized.includes('role')) return 'get_experience';
  return 'get_profile';
}

export function runPortfolioTool(name: PortfolioToolName, query = '') {
  if (name === 'get_project_details') return portfolioTools.get_project_details(query);
  if (name === 'search_portfolio') return portfolioTools.search_portfolio(query);
  return portfolioTools[name]();
}
