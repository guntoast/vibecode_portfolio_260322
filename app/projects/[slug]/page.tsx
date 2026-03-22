import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getActiveProjects, getProjectBySlug, getProjects } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { ContributionBadge } from '@/components/ui/ContributionBadge';
import { MetricCard } from '@/components/ui/MetricCard';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project || project._placeholder) {
    return { title: '프로젝트 | 김혜은 포트폴리오' };
  }
  return {
    title: `${project.title} | 김혜은 포트폴리오`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const [project, activeProjects] = await Promise.all([
    getProjectBySlug(params.slug),
    getActiveProjects(),
  ]);

  if (!project) {
    notFound();
  }

  if (project._placeholder) {
    redirect('/projects');
  }

  const currentIndex = activeProjects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex < activeProjects.length - 1 ? activeProjects[currentIndex + 1] : null;
  const nextProject = currentIndex > 0 ? activeProjects[currentIndex - 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {/* Back */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        프로젝트 목록
      </Link>

      {/* 1. 프로젝트 개요 */}
      <section className="mb-12">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="category">{project.category}</Badge>
          <ContributionBadge value={project.contribution} />
        </div>
        <h1 className="mb-2 text-3xl font-bold leading-snug text-gray-900 dark:text-white sm:text-4xl">
          {project.title}
        </h1>
        {project.subtitle && (
          <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">{project.subtitle}</p>
        )}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <span>기간: {project.period}</span>
          <span>담당: {project.contributionDetail}</span>
        </div>
      </section>

      {/* 2. 배경 및 문제 정의 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">배경 및 문제 정의</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">{project.background}</p>
      </section>

      {/* 3. 나의 역할 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">나의 역할</h2>
        <ul className="space-y-2">
          {project.myRole.map((role, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
              <span>{role}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. 해결 방법 / 기획 내용 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">해결 방법 / 기획 내용</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">{project.solution}</p>
      </section>

      {/* 5. 이미지 갤러리 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">이미지</h2>
        {project.images && project.images.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {project.images.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                <Image src={src} alt={`${project.title} 이미지 ${idx + 1}`} width={600} height={400} className="w-full object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-48 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm text-gray-400 dark:text-gray-500">이미지 준비 중</p>
          </div>
        )}
      </section>

      {/* 6. 핵심 성과 */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">핵심 성과</h2>
        {project.keyMetrics.length > 0 && (
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            {project.keyMetrics.map((metric, idx) => (
              <MetricCard key={idx} metric={metric} />
            ))}
          </div>
        )}
        <ul className="space-y-2">
          {project.results.map((result, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <span className="mt-1 flex-shrink-0">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 이전/다음 프로젝트 네비게이션 */}
      <nav className="border-t border-gray-200 pt-8 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col gap-1 rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/30 transition-colors"
            >
              <span className="text-xs text-gray-400 dark:text-gray-500">이전 프로젝트</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400 line-clamp-2">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end gap-1 rounded-xl border border-gray-200 p-4 text-right hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/30 transition-colors"
            >
              <span className="text-xs text-gray-400 dark:text-gray-500">다음 프로젝트</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400 line-clamp-2">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  );
}
