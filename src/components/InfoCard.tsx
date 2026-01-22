import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RiArrowRightSLine } from '@remixicon/react';

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
      className='group border-sage/10 bg-sage/5 hover:border-clay/50 hover:bg-clay/10 flex w-full cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300'
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
              className='text-clay hidden ps-1 transition-all delay-100 duration-100 ease-in-out group-hover:inline'
            />
          </span>
          <span className='text-xs text-black/70 italic md:text-sm dark:text-white/70'>
            {subtitle}
          </span>
        </div>
      </div>
      <div className='text-xs text-black/60 md:text-sm dark:text-white/60'>
        {years}
      </div>
    </a>
  );
};

export default InfoCard;
