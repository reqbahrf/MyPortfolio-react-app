import { forwardRef, memo, useRef, useCallback } from 'react';
import { motion, useMotionValue } from 'motion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PillTag from './PillTag';

interface ProjectCardProps {
  id: string;
  coverImg: string;
  title: string;
  targetModal_id: string;
  description?: string;
  tags: string[];
  openModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    { id, targetModal_id, coverImg, title, description, tags, openModal },
    ref,
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
      [ref],
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
        whileHover={{ scale: 1.05, overflow: 'visible' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className='group relative flex w-[95dvw] cursor-pointer flex-col overflow-hidden rounded-[20px] bg-gray-200/50 transition-all duration-300 hover:shadow-md hover:shadow-black/25 sm:w-[70dvw] md:h-112 md:w-[40dvw] lg:w-[30dvw] dark:bg-gray-900/50 hover:dark:shadow-pink-500/50'
      >
        <motion.div
          className='h-48 w-full transform-[translateZ(0px)] transition-transform duration-500 transform-3d group-hover:transform-[translateZ(100px)]'
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <LazyLoadImage
            className='h-48 w-full object-cover group-hover:object-contain group-hover:brightness-75'
            effect='blur'
            threshold={300}
            wrapperProps={{
              style: { transitionDelay: '0.3s' },
            }}
            src={coverImg}
            alt={title}
          />
        </motion.div>
        <div className='px-2 pt-4 pb-4'>
          <div className='mb-4 line-clamp-1 text-xl font-bold text-black group-hover:text-pink-700 dark:text-white'>
            {title}
          </div>
          <p className='scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 mb-3 overflow-hidden text-justify text-sm text-black transition-all duration-300 group-hover:max-h-[200px] group-hover:overflow-y-auto sm:max-h-[50px] md:max-h-[35px] dark:text-white'>
            {description}
          </p>
          <div className='flex flex-wrap gap-2'>
            {tags?.map((tag, index) => (
              <PillTag key={index} tag={tag} />
            ))}
          </div>
        </div>
      </motion.div>
    );
  },
);

export default memo(ProjectCard);
