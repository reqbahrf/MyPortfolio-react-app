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
      className='group flex w-full cursor-pointer items-center justify-between rounded-xl bg-gray-200 px-4 py-3 text-white transition-all duration-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700'
    >
      <div className='flex items-center space-x-4'>
        <LazyLoadImage
          src={icon}
          alt={`${icon} logo`}
          className='h-10 w-10 rounded-full object-cover'
          effect='blur'
          threshold={300}
          wrapperProps={{
            style: { transitionDelay: '0.3s' },
          }}
        />
        <div className='flex flex-col'>
          <span className='text-sm font-semibold text-black md:text-lg dark:text-white'>
            {title}
            <RiArrowRightSLine
              size={20}
              className='hidden ps-1 transition-all delay-100 duration-100 ease-in-out group-hover:inline'
            />
          </span>
          <span className='text-xs text-black md:text-sm dark:text-white'>
            {subtitle}
          </span>
        </div>
      </div>
      <div className='text-xs text-black md:text-sm dark:text-white'>
        {years}
      </div>
    </a>
  );
};

export default InfoCard;
