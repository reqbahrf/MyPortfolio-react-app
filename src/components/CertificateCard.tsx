import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
    <div className='group certificate-card w-[600px] h-[200px] rounded-[20px] overflow-hidden shadow-lg bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-row'>
      <div className='w-1/2 h-full flex items-center justify-center overflow-hidden'>
        <LazyLoadImage
          className='w-full h-full object-cover group-hover:brightness-75 group-hover:object-contain'
          effect='blur'
          threshold={300}
          wrapperProps={{
            style: { transitionDelay: '0.3s' }, // Adjust transition delay
          }}
          src={coverImg}
          alt={title}
        />
      </div>
      <div className='certificate-details w-1/2 p-4 flex flex-col justify-between'>
        <h1 className='font-bold text-white text-xl mb-4 line-clamp-1 group-hover:text-pink-700'>
          {title}
        </h1>
        <p className='text-white text-sm mb-4 line-clamp-3'>{description}</p>
        <button
          className='text-pink-300 hover:text-pink-700 flex items-center mt-auto'
          onClick={handleViewDetailsClick}
        >
          View Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
