import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomeSection from './HomeSection';
import ProjectSection from './ProjectSection';
import CertificatesSection from './CertificatesSection';
import GitHubStatSection from './GitHubStatSection';
import NavigationBar from './components/NavigationBar';
import Contact from './Contact';

const App: React.FC = () => {
  return (
    <>
      <HomeSection />
      <GitHubStatSection />
      <ProjectSection />
      <CertificatesSection />
      <NavigationBar />
      <Contact />
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
