import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ProjectCardProps {
  Div_id: string;
  coverImg: string;
  title: string;
  description?: string;
  btn_id: string;
  targetModal_id: string;
  openModal: () => void;
  categories?: string[]; // New prop for categories/tags
}

export default function ProjectCard({
  Div_id,
  coverImg,
  title,
  description,
  btn_id,
  targetModal_id,
  openModal,
  categories, // Destructure the new prop
}: ProjectCardProps) {
  const truncateDescription = (text: string, maxLength: number) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const truncatedDescription = description
    ? truncateDescription(description, 100)
    : '';

  return (
    <div
      id={Div_id}
      className='group flex flex-col justify-between w-[280px] h-[350px] sm:w-[290px] sm:h-[355px] rounded-[40px] overflow-hidden shadow-lg bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl'
    >
      <div className='flex-grow'>
        <div className='relative'>
          <LazyLoadImage
            className='w-full h-48 object-cover transition-all duration-300 group-hover:brightness-75'
            effect='blur'
            threshold={300}
            wrapperProps={{
              style: { transitionDelay: '0.3s' }, // Adjust transition delay
            }}
            src={coverImg}
            alt={title}
          />
        </div>
        <div className='pt-4 px-2'>
          <div className='font-bold text-white text-xl mb-2'>{title}</div>
          <p
            className='text-white text-sm mb-4 text-justify'
            title={description} // Tooltip for full description
          >
            {truncatedDescription}
          </p>
          {categories && (
            <div className='flex flex-wrap gap-1'>
              {categories.map((category) => (
                <span
                  key={category}
                  className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='ps-6 mb-3'>
        <button
          id={btn_id}
          className='text-pink-300 hover:text-pink-700 flex items-center'
          onClick={openModal}
        >
          View Full Details
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 ml-1'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
