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
    <div className='rounded-xl bg-gray-200 p-4 md:p-5 dark:bg-gray-800'>
      <div className='flex items-center gap-2 text-black dark:text-white'>
        {categoryIcons[categoryName]}
        <h2 className='text-lg font-semibold'>{categoryNames[categoryName]}</h2>
      </div>
      <ul className='ms-2 mt-2 list-disc ps-2 text-pink-700 md:ps-5'>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className='text-sm text-black md:text-base dark:text-white'>
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
