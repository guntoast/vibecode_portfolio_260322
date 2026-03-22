// 추후 API/DB로 교체 시 이 파일만 수정하면 됩니다
import projectsData from '@/data/projects.json';
import careerData from '@/data/career.json';
import skillsData from '@/data/skills.json';
import type { Project, Career, SkillGroup } from '@/types';

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getActiveProjects(): Project[] {
  return (projectsData as Project[]).filter(p => !p._placeholder);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find(p => p.slug === slug);
}

export function getCareer(): Career[] {
  return careerData as Career[];
}

export function getSkills(): SkillGroup[] {
  return skillsData as SkillGroup[];
}
