import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import CertificatesSection from './CertificatesSection';
import Footer from './Footer';
import GitHubStatSection from './GitHubStatSection';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <GitHubStatSection />
      <AboutSection />
      <ProjectSection />
      <CertificatesSection />
      <Footer />
    </>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
