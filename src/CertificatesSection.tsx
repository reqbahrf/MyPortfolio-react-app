import CertificateCard from './components/CertificateCard';
import Certificates from './content/Certificates.json';

const CertificatesSection = () => {
  const rows = [];
  for (let i = 0; i < Certificates.certificates.length; i += 2) {
    rows.push(Certificates.certificates.slice(i, i + 2));
  }

  return (
    <section id='Certificates'>
      <div className='flex flex-col items-center justify-center m-0 py-10 sm:m-30 md:m-40'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-14 mb-6'
          >
            {row.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                coverImg={certificate.coverImg}
                title={certificate.title}
                description={certificate.description}
                link={certificate.link}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
