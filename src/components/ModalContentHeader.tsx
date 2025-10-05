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
        className='flex flex-col overflow-x-hidden items-center w-screen h-screen'
        ref={modalContentRef}
        id='main-content-header'
      >
        <div
          id='modal-content-header'
          style={{ backgroundImage: `url(${coverImg})` }}
        >
          {title}
        </div>
        {children}
      </div>
    </>
  );
};

export default ModalContentHeader;
