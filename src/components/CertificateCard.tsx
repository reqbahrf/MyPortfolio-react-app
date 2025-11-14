import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'motion/react';
interface CertificateCardProps {
  coverImg: string;
  title: string;
  description: string;
  link: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  coverImg,
  title,
  description,
  link,
}) => {
  const handleViewDetailsClick = () => {
    window.open(link, '_blank');
  };

  return (
    <motion.div
      className='group certificate-card w-[95dvw] md:w-152 h-52 rounded-[20px] shadow-lg dark:bg-gray-800 bg-gray-200 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-row'
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      whileHover={{ scale: 1.05, overflow: 'visible' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className='w-1/2 h-full transition-transform duration-500 transform-3d transform-[translateZ(0px)] group-hover:transform-[translateZ(150px)]'>
        <LazyLoadImage
          className='w-full h-full object-cover group-hover:object-contain'
          effect='blur'
          threshold={300}
          wrapperProps={{
            style: { transitionDelay: '0.3s' }, // Adjust transition delay
          }}
          src={coverImg}
          alt={title}
        />
      </div>
      <div className='certificate-details w-1/2 p-4 flex flex-col justify-between transition-all duration-300 overflow-y-auto'>
        <h1 className='font-bold dark:text-white text-black text-xl mb-4 line-clamp-none whitespace-normal md:line-clamp-1 group-hover:text-pink-700 md:group-hover:line-clamp-none md:group-hover:whitespace-normal md:group-hover:overflow-visible'>
          {title}
        </h1>
        <p className=' dark:text-white text-black text-sm mb-4 line-clamp-none whitespace-normal md:line-clamp-3 md:group-hover:line-clamp-none md:group-hover:whitespace-normal md:group-hover:overflow-visible overflow-y-auto'>
          {description}
        </p>
        <button
          className='text-pink-500 hover:text-pink-700 flex items-center mt-auto'
          onClick={handleViewDetailsClick}
        >
          View Certificate
        </button>
      </div>
    </motion.div>
  );
};

export default memo(CertificateCard);
