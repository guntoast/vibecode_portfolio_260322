import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'category' | 'tag' | 'coming-soon';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
        variant === 'category' && 'bg-indigo-600 text-white',
        variant === 'tag' && 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
        variant === 'coming-soon' && 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
        className
      )}
    >
      {children}
    </span>
  );
}
