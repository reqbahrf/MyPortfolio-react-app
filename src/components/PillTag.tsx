import React from 'react';

interface PillTagProps {
  tag: string;
}

const PillTag: React.FC<PillTagProps> = ({ tag }) => {
  return (
    <span className='dark:bg-gray-900 dark:text-white text-sm font-semibold px-2 py-1 rounded-sm bg-gray-200 text-black'>
      {tag}
    </span>
  );
};

export default PillTag;
