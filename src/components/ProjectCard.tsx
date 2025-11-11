import { forwardRef, memo, useRef, useCallback, useState } from 'react';
import { motion, useMotionValue } from 'motion/react';
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
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const localRef = useRef<HTMLDivElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLDivElement) => {
        localRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [ref]
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!localRef.current) return;
      const rect = localRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      rotateX.set(((y - centerY) / centerY) * 25);
      rotateY.set(((x - centerX) / centerX) * -25);
    };

    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    return (
      <motion.div
        id={id}
        ref={setRefs}
        data-target-modalid={targetModal_id}
        data-cover-img={coverImg}
        data-title={title}
        onClick={openModal}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className='group flex flex-col justify-between w-[350px] rounded-[20px] h-[450px] shadow-lg bg-gray-800 transition-all duration-300 hover:shadow-xl relative cursor-pointer'
      >
        <motion.div
          className='w-full h-48 transition-transform duration-500 [transform-style:preserve-3d] [transform:translateZ(0px)] group-hover:[transform:translateZ(100px)]'
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <LazyLoadImage
            className='w-full h-48 object-cover group-hover:brightness-75 group-hover:object-contain'
            effect='blur'
            threshold={300}
            wrapperProps={{
              style: { transitionDelay: '0.3s' },
            }}
            src={coverImg}
            alt={title}
          />
        </motion.div>
        <div className='pt-4 px-2 pb-4'>
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
                className='bg-gray-700 text-white text-sm px-2 py-1 rounded'
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
      </motion.div>
    );
  }
);

export default memo(ProjectCard);
