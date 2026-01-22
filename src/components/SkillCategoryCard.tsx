import { RiComputerFill, RiServerFill, RiToolsFill } from '@remixicon/react';
interface SkillCategoryCardProps {
  categoryName: 'frontend' | 'backend' | 'testingAndtools';
  skills: string[];
}

export default function SkillCategoryCard({
  categoryName,
  skills,
}: SkillCategoryCardProps) {
  const categoryNames: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    testingAndtools: 'Testing & Tools',
  };
  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <RiComputerFill />,
    backend: <RiServerFill />,
    testingAndtools: <RiToolsFill />,
  };
  return (
    <div className='border-sage/10 bg-sage/5 hover:border-sage/30 rounded-xl border p-4 transition-colors md:p-5'>
      <div className='flex items-center gap-2 text-black dark:text-white'>
        {categoryIcons[categoryName]}
        <h2 className='font-display text-lg font-bold tracking-wider uppercase'>
          {categoryNames[categoryName]}
        </h2>
      </div>
      <ul className='border-clay/30 ms-2 mt-2 space-y-2 border-l ps-4'>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className='font-body hover:text-clay text-sm text-black/90 transition-colors md:text-base dark:text-white/90'>
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
