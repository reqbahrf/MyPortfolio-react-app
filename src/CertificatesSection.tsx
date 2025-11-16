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
      <h2 className='pt-2 text-center text-2xl font-bold text-black dark:text-white'>
        Certificates
      </h2>
      <div className='flex flex-col items-center justify-center gap-4 py-10 sm:gap-6'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='flex flex-col items-center justify-center gap-4 lg:flex-row'
          >
            {row.map((certificate) => (
              <CertificateCard key={certificate.id} {...certificate} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
