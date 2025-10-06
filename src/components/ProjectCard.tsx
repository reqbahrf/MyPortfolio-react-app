import { forwardRef, memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ProjectCardProps {
  id: string;
  coverImg: string;
  title: string;
  targetModal_id: string;
  description?: string;
  tags: string[];
  techStack?: string[];
  btn_id: string;
  openModal: (
    btnId: string,
    modalId: string,
    coverImg: string,
    title: string
  ) => void;
}

const ProjectCard = forwardRef<HTMLButtonElement, ProjectCardProps>(
  (
    {
      id,
      targetModal_id,
      coverImg,
      title,
      description,
      tags,
      techStack,
      btn_id,
      openModal,
    },
    ref
  ) => {
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
        id={id}
        className='group flex flex-col justify-between w-[350px] rounded-[20px] h-[430px] overflow-hidden shadow-lg bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl'
      >
        <div className='flex-grow'>
          <div className='relative'>
            <LazyLoadImage
              className='w-full h-48 object-cover group-hover:brightness-75 group-hover:object-contain'
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
            <div className='font-bold text-white text-xl mb-4 line-clamp-1 group-hover:text-pink-700'>
              {title}
            </div>
            <p className='text-gray-200 text-sm mb-3 text-justify overflow-hidden md:max-h-[35px] sm:max-h-[50px] group-hover:overflow-y-auto group-hover:max-h-[200px] transition-all duration-300 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800'>
              {description}
            </p>
            <div className='flex flex-wrap gap-2'>
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className='bg-gray-700 text-white px-2 py-1 rounded'
                >
                  {tag}
                </span>
              ))}
            </div>
            {techStack && techStack?.length > 0 && (
              <div className='text-white text-xs mt-2'>
                <span className='font-semibold mr-1'>Stack:</span>
                <div className='flex flex-wrap gap-2 mt-1'>
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className='bg-pink-700 text-white text-xs p-1 rounded-full cursor-default hover:bg-pink-600 transition'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='ps-6 mb-3'>
          <button
            id={btn_id}
            className='text-pink-300 hover:text-pink-700 flex items-center'
            onClick={() => openModal(btn_id, targetModal_id, coverImg, title)}
            ref={ref}
          >
            View Details
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
);

export default memo(ProjectCard);
