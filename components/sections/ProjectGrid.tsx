'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ContributionBadge } from '@/components/ui/ContributionBadge';
import { cn } from '@/lib/utils';

const CATEGORIES = ['전체', 'Co-Marketing', 'On/Offline Promotion', 'Social/Contents Marketing'];

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState('전체');

  const sorted = [...projects].sort((a, b) => b.id - a.id);

  const filtered =
    activeCategory === '전체'
      ? sorted
      : sorted.filter(
          (p) => p._placeholder || p.category === activeCategory
        );

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              activeCategory === cat
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => {
          if (project._placeholder) {
            return <PlaceholderCard key={project.id} />;
          }
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:shadow-gray-800/50"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <Badge variant="category">{project.category}</Badge>
        <ContributionBadge value={project.contribution} />
      </div>

      <h3 className="mb-2 text-base font-semibold leading-snug text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>

      {project.subtitle && (
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">{project.subtitle}</p>
      )}

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">
        {project.summary}
      </p>

      <div className="mt-auto">
        <p className="mb-3 text-xs text-gray-400 dark:text-gray-500">{project.period}</p>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="tag">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}

function PlaceholderCard() {
  return (
    <div className="relative flex flex-col rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 opacity-60 dark:border-gray-600 dark:bg-gray-900/50">
      <div className="mb-3">
        <Badge variant="coming-soon">Coming Soon</Badge>
      </div>
      <div className="mb-2 h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
      <div className="mb-3 h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-3 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
      </div>
      <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">준비 중입니다</p>
    </div>
  );
}
