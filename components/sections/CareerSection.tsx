import type { Career } from '@/types';
import { cn } from '@/lib/utils';

interface CareerSectionProps {
  careers: Career[];
}

const typeLabel: Record<string, { label: string; color: string }> = {
  fulltime: { label: '정규직', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' },
  intern: { label: '인턴', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
  founder: { label: '창업', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
};

export function CareerSection({ careers }: CareerSectionProps) {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">경력</h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 sm:left-6" />

          <div className="space-y-8">
            {careers.map((career, idx) => {
              const typeInfo = typeLabel[career.type] ?? typeLabel.fulltime;
              return (
                <div key={idx} className="relative flex gap-6 sm:gap-8">
                  <div className="relative flex-shrink-0">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white dark:border-indigo-400 dark:bg-gray-950 sm:h-12 sm:w-12">
                      <div className="h-3 w-3 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    </div>
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {career.company}
                      </h3>
                      <span
                        className={cn(
                          'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
                          typeInfo.color
                        )}
                      >
                        {typeInfo.label}
                      </span>
                    </div>
                    <p className="mb-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {career.role}
                    </p>
                    <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">{career.period}</p>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {career.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
