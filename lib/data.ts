import { unstable_noStore as noStore } from 'next/cache';
import { supabase } from '@/lib/supabase';
import type { Project, Career, SkillGroup } from '@/types';

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []) as Project[];
}

export async function getActiveProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .neq('_placeholder', true)
    .order('id', { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []) as Project[];
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) return undefined;
  return data as Project;
}

export async function getCareer(): Promise<Career[]> {
  const { data, error } = await supabase
    .from('career')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw new Error(error.message);
  return (data ?? []) as Career[];
}

export async function getSkills(): Promise<SkillGroup[]> {
  noStore();
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('id', { ascending: true });

  if (error) throw new Error(error.message);
  return (data ?? []) as SkillGroup[];
}
