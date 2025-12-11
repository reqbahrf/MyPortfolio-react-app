import React, { useCallback, useEffect, useRef } from 'react';
import handleScroll from '../utils/handleScroll';

type ContentHeaderProps = {
  title: string;
  coverImg: string;
  children: React.ReactNode;
};

const ModalContentHeader = ({
  title,
  coverImg,
  children,
}: ContentHeaderProps) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const onScroll = useCallback(() => {
    if (modalContentRef.current) {
      handleScroll(modalContentRef.current);
    }
  }, []);
  useEffect(() => {
    const main = modalContentRef.current;
    if (main) {
      main.addEventListener('scroll', onScroll);
    }

    return () => {
      if (main) {
        main.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll]);
  return (
    <>
      <div
        className='flex h-screen w-screen flex-col items-center overflow-x-hidden'
        ref={modalContentRef}
        id='main-content-header'
      >
        <div
          id='modal-content-header'
          style={{ backgroundImage: `url(${coverImg})` }}
        >
          {title}
        </div>
        <div className='mainContent z-10 flex w-full flex-col items-center space-y-5 p-2 md:p-4 md:px-10'>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalContentHeader;
