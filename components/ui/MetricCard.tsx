import type { KeyMetric } from '@/types';

interface MetricCardProps {
  metric: KeyMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-indigo-100 bg-indigo-50 p-5 text-center dark:border-indigo-900/40 dark:bg-indigo-950/30">
      <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{metric.value}</span>
      <span className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">{metric.label}</span>
      {metric.note && (
        <span className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{metric.note}</span>
      )}
    </div>
  );
}
