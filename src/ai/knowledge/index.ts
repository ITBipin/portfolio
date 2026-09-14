import { profile } from './profile';
import { skillCategories } from './skills';
import { experienceTimeline } from './experience';
import { projectKnowledge } from './projects';
import { achievements } from './achievements';

export { profile };
export { skillCategories };
export { experienceTimeline };
export { projectKnowledge };
export { achievements };

export const portfolioKnowledge = {
  profile,
  skills: skillCategories,
  experience: experienceTimeline,
  projects: projectKnowledge,
  achievements,
};
