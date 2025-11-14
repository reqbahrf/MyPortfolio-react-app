import { useMemo } from 'react';
import CertificateCard from './components/CertificateCard';
import Certificates from './content/Certificates.json';

const CertificatesSection = () => {
  const rows = useMemo(() => {
    const arr = [];
    for (let i = 0; i < Certificates.certificates.length; i += 2) {
      arr.push(Certificates.certificates.slice(i, i + 2));
    }
    return arr;
  }, [Certificates.certificates]);

  return (
    <section id='Certificates'>
      <h2 className='text-2xl text-center font-bold dark:text-white text-black pt-2'>
        Certificates
      </h2>
      <div className='flex flex-col items-center justify-center gap-4 sm:gap-6 py-10'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6'
          >
            {row.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                {...certificate}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
