import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RiArrowRightSLine } from '@remixicon/react';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface InfoCardProps {
  title: string;
  subtitle: string;
  icon: string;
  years: string;
  link: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  icon,
  years,
  link,
}) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex items-center justify-between bg-[#111] text-white rounded-xl px-4 py-3 hover:bg-[#1a1a1a] transition-all duration-200 w-full cursor-pointer'
    >
      <div className='flex items-center space-x-4'>
        <LazyLoadImage
          src={icon}
          alt={`${icon} logo`}
          className='w-10 h-10 rounded-full object-cover'
          effect='blur'
          threshold={300}
          wrapperProps={{
            style: { transitionDelay: '0.3s' },
          }}
        />
        <div className='flex flex-col'>
          <span className='font-semibold text-sm md:text-lg'>
            {title}
            <RiArrowRightSLine
              size={20}
              className='ps-1 hidden group-hover:inline transition-all duration-100 ease-in-out delay-100'
            />
          </span>
          <span className='text-xs md:text-sm'>{subtitle}</span>
        </div>
      </div>
      <div className='text-xs md:text-sm text-gray-400'>{years}</div>
    </a>
  );
};

export default InfoCard;
