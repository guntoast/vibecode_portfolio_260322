import type { Metadata } from 'next';
import { getProjects } from '@/lib/data';
import { ProjectGrid } from '@/components/sections/ProjectGrid';

export const metadata: Metadata = {
  title: '프로젝트 | 김혜은 포트폴리오',
  description: '김혜은이 기획·실행한 마케팅 및 서비스 기획 프로젝트 목록입니다.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">프로젝트</h1>
        <p className="text-gray-500 dark:text-gray-400">
          직접 기획하고 실행한 마케팅·서비스 프로젝트들입니다.
        </p>
      </div>

      <ProjectGrid projects={projects} />
    </div>
  );
}
