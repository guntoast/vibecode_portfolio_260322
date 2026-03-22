import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, href, variant = 'primary', className, onClick }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
    outline:
      'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-950/30',
  };

  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
