import React from 'react';

interface PillTagProps {
  tag: string;
}

const PillTag: React.FC<PillTagProps> = ({ tag }) => {
  return (
    <span className='bg-clay/10 font-body text-clay rounded-sm px-2 py-1 text-sm'>
      {tag}
    </span>
  );
};

export default PillTag;
