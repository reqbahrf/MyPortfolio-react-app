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
  openModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      id,
      targetModal_id,
      coverImg,
      title,
      description,
      tags,
      techStack,
      openModal,
    },
    ref
  ) => {
    return (
      <div
        id={id}
        ref={ref}
        data-target-modalid={targetModal_id}
        data-cover-img={coverImg}
        data-title={title}
        onClick={openModal}
        className='group flex flex-col justify-between w-[350px] rounded-[20px] h-[430px] overflow-hidden shadow-lg bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl relative cursor-pointer'
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
      </div>
    );
  }
);

export default memo(ProjectCard);
