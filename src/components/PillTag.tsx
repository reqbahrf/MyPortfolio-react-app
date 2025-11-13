import React from 'react';

interface PillTagProps {
  tag: string;
}

const PillTag: React.FC<PillTagProps> = ({ tag }) => {
  return (
    <span className='bg-gray-700 text-white text-sm font-semibold px-2 py-1 rounded-sm dark:bg-gray-200 dark:text-black'>
      {tag}
    </span>
  );
};

export default PillTag;
