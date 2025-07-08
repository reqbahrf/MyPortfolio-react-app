import CertificateCard from './components/CertificateCard';
import Certificates from './content/Certificates.json';

const CertificatesSection = () => {
  const CertificateCardsData = Certificates.certificates.map((certificate) => (
    <CertificateCard
      key={certificate.id}
      coverImg={certificate.coverImg}
      title={certificate.title}
      description={certificate.description}
      link={certificate.link}
    />
  ));

  return (
    <section id='Certificates'>
      <div className='flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-14 m-0 py-10 sm:m-30 md:m-40'>
        {CertificateCardsData || ''}
      </div>
    </section>
  );
};

export default CertificatesSection;
