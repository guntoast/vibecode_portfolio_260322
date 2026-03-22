export interface KeyMetric {
  label: string;
  value: string;
  note: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  contribution: number;
  contributionDetail: string;
  thumbnail?: string;
  summary: string;
  background: string;
  myRole: string[];
  solution: string;
  results: string[];
  keyMetrics: KeyMetric[];
  tags: string[];
  images: string[];
  _placeholder?: boolean;
}

export interface Career {
  id?: string;
  company: string;
  role: string;
  period: string;
  description: string;
  type: 'fulltime' | 'intern' | 'founder';
}

export interface SkillGroup {
  category: string;
  items: string[];
}
