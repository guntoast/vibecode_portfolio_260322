interface ContributionBadgeProps {
  value: number;
}

export function ContributionBadge({ value }: ContributionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
      <span>기여도</span>
      <span>{value}%</span>
    </span>
  );
}
