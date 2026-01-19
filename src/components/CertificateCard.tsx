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
      className='group certificate-card flex h-52 w-[95dvw] flex-row overflow-hidden rounded-[20px] bg-gray-200/50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-black/25 md:w-[45dvw] dark:bg-gray-900/50 hover:dark:shadow-pink-500/50'
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      whileHover={{ scale: 1.005, overflow: 'visible' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className='h-full w-1/2 transform-[translateZ(0px)] transition-transform duration-500 transform-3d group-hover:transform-[translateZ(150px)]'>
        <LazyLoadImage
          className='h-full w-full object-cover group-hover:object-contain'
          effect='blur'
          threshold={300}
          wrapperProps={{
            style: { transitionDelay: '0.3s' }, // Adjust transition delay
          }}
          src={coverImg}
          alt={title}
        />
      </div>
      <div className='certificate-details flex w-1/2 flex-col justify-between overflow-y-auto p-4 transition-all duration-300'>
        <h1 className='mb-4 line-clamp-none text-xl font-bold whitespace-normal text-black group-hover:text-pink-700 md:line-clamp-1 md:group-hover:line-clamp-none md:group-hover:overflow-visible md:group-hover:whitespace-normal dark:text-white'>
          {title}
        </h1>
        <p className='mb-4 line-clamp-none overflow-y-auto text-sm whitespace-normal text-black md:line-clamp-3 md:group-hover:line-clamp-none md:group-hover:overflow-visible md:group-hover:whitespace-normal dark:text-white'>
          {description}
        </p>
        <button
          className='mt-auto flex items-center text-pink-500 hover:text-pink-700'
          onClick={handleViewDetailsClick}
        >
          View Certificate
        </button>
      </div>
    </motion.div>
  );
};

export default memo(CertificateCard);
