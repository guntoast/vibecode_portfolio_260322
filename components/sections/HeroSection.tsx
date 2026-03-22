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
            서비스 기획자 / 마케팅 기획자
          </p>
          <p className="mb-10 text-lg text-gray-500 dark:text-gray-400">
            브랜드와 사람을 잇는 기획자입니다
          </p>
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
