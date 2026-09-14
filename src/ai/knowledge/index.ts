import { profile } from './profile';
import { skillCategories } from './skills';
import { experienceTimeline } from './experience';
import { projectKnowledge } from './projects';
import { achievements } from './achievements';
import { aiDirection, aiEvaluation, aiProjects } from './aiDirection';

export { profile };
export { skillCategories };
export { experienceTimeline };
export { projectKnowledge };
export { achievements };
export { aiDirection, aiEvaluation, aiProjects };

export const portfolioKnowledge = {
  profile,
  skills: skillCategories,
  experience: experienceTimeline,
  projects: projectKnowledge,
  achievements,
  aiDirection,
  aiProjects,
  aiEvaluation,
};
