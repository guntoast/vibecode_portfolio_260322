import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '김혜은 | 서비스 기획자 포트폴리오',
  description:
    '롯데월드 어드벤처 마케팅팀 출신 서비스 기획자 김혜은의 포트폴리오입니다. Co-Marketing, CRM, 라이브커머스 등 다양한 프로모션 기획 경험을 담았습니다.',
  keywords: ['서비스 기획자', '마케팅 기획자', 'Co-Marketing', 'CRM', '포트폴리오', '김혜은'],
  openGraph: {
    title: '김혜은 | 서비스 기획자 포트폴리오',
    description: '브랜드와 사람을 잇는 기획자입니다',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
