import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CareerSection } from '@/components/sections/CareerSection';
import { SkillSection } from '@/components/sections/SkillSection';
import { getCareer, getSkills } from '@/lib/data';

export const metadata: Metadata = {
  title: '김혜은 | 서비스 기획자 포트폴리오',
  description: '브랜드와 사람을 잇는 기획자, 김혜은의 포트폴리오입니다.',
};

export default function HomePage() {
  const careers = getCareer();
  const skills = getSkills();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <CareerSection careers={careers} />
      <SkillSection skills={skills} />
    </>
  );
}
