export function AboutSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">소개</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                롯데월드 어드벤처에서 Co-Marketing, CRM, 라이브커머스 등 다양한 온오프라인
                프로모션을 기획·실행해온 마케팅 기획자입니다.
              </p>
              <p>
                무신사·지그재그·에브리타임 등 MZ세대 플랫폼과의 제휴 기획부터 고객 데이터 기반
                CRM 시스템 구축, 네이버 쇼핑라이브 채널 운영까지 전략 수립부터 실행까지 전
                과정을 직접 담당해왔습니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">연락처</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <svg className="h-4 w-4 flex-shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:khe95@icloud.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    khe95@icloud.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <svg className="h-4 w-4 flex-shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>010-9271-9078</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
