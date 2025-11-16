import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import HomeSection from './HomeSection';
import ProjectSection from './ProjectSection';
import CertificatesSection from './CertificatesSection';
import GitHubStatLoading from './components/GitHubStatLoading';
const GitHubStatSection = lazy(() => import('./GitHubStatSection'));
import NavigationBar from './components/NavigationBar';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <HomeSection />
        <Suspense fallback={<GitHubStatLoading />}>
          <GitHubStatSection />
        </Suspense>
        <ProjectSection />
        <CertificatesSection />
        <NavigationBar />
        <Contact />
      </ThemeProvider>
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
