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
      className='group certificate-card bg-sage/5 border-sage/10 hover:shadow-clay/20 hover:border-clay/50 flex h-52 w-[95dvw] flex-row overflow-hidden rounded-[20px] border shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:w-[45dvw]'
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      whileHover={{ scale: 1.005, overflow: 'visible' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className='h-full w-1/2 transform-[translateZ(0px)] transition-transform duration-500 transform-3d group-hover:transform-[translateZ(50px)]'>
        <LazyLoadImage
          className='h-full w-full object-cover transition-all duration-500 group-hover:object-contain'
          effect='blur'
          threshold={300}
          wrapperProps={{
            style: { transitionDelay: '0.3s' }, // Adjust transition delay
          }}
          src={coverImg}
          alt={title}
        />
      </div>
      <div className='certificate-details flex w-1/2 flex-col justify-between p-4 transition-all duration-300'>
        <div>
          <h1 className='font-display group-hover:text-clay mb-2 line-clamp-2 text-lg leading-tight font-bold text-black transition-colors dark:text-white'>
            {title}
          </h1>
          <p className='font-body line-clamp-3 text-xs leading-relaxed text-black/70 md:line-clamp-4 dark:text-white/70'>
            {description}
          </p>
        </div>
        <button
          className='font-body text-sage hover:text-clay group/btn mt-auto flex items-center text-sm font-semibold transition-colors'
          onClick={handleViewDetailsClick}
        >
          View Certificate
          <span className='ml-1 transition-transform group-hover/btn:translate-x-1'>
            →
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default memo(CertificateCard);
