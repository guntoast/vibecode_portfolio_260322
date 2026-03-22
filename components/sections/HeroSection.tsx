import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-white py-24 dark:from-indigo-950/30 dark:via-gray-950 dark:to-gray-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Portfolio
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            김혜은
          </h1>
          <p className="mb-3 text-xl font-medium text-gray-600 dark:text-gray-300">
            PM
          </p>
          <p className="mb-5 text-lg text-gray-500 dark:text-gray-400">
            서비스 기획부터 마케팅까지, 고객의 전 여정을 함께 고민하는 PM입니다.
          </p>
          <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href="mailto:khe95@icloud.com"
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              khe95@icloud.com
            </a>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">
              <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              010-9271-9078
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/projects" variant="primary">
              프로젝트 보기
            </Button>
            <Button href="mailto:khe95@icloud.com" variant="outline">
              연락하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
