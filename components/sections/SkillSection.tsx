import type { SkillGroup } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface SkillSectionProps {
  skills: SkillGroup[];
}

export function SkillSection({ skills }: SkillSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">스킬</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 text-base font-semibold text-gray-700 dark:text-gray-300">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
