export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 김혜은. 서비스 기획자 포트폴리오
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="mailto:khe95@icloud.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              khe95@icloud.com
            </a>
            <span>010-9271-9078</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
