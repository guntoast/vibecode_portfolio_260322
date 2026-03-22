import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900',
        hover &&
          'transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-800/50',
        className
      )}
    >
      {children}
    </div>
  );
}
