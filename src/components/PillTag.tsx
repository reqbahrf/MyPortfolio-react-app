import React from 'react';

interface PillTagProps {
  tag: string;
}

const PillTag: React.FC<PillTagProps> = ({ tag }) => {
  return (
    <span className='rounded-sm bg-gray-200 px-2 py-1 text-sm font-semibold text-black dark:bg-gray-800 dark:text-white'>
      {tag}
    </span>
  );
};

export default PillTag;
