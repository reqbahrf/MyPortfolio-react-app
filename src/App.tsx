import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { ModalProvider } from './context/ModalContext';
import StarsSkyBox from './components/background/StarsSkyBox';
import { WarpProvider } from './context/WarpContext';
import WarpViewport from './components/WarpViewPort';
import WarpedUI from './components/WarpedUI';
import HomeSection from './HomeSection';
import ProjectSection from './ProjectSection';
import CertificatesSection from './CertificatesSection';
import GitHubStatLoading from './components/GitHubStatLoading';
const GitHubStatSection = lazy(() => import('./GitHubStatSection'));
import NavigationBar from './components/NavigationBar';
import Contact from './Contact';
import GlobalModal from './components/GlobalModal';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <ModalProvider>
          <WarpProvider>
            <StarsSkyBox />
            <WarpViewport>
              <WarpedUI>
                <HomeSection />
                <Suspense fallback={<GitHubStatLoading />}>
                  <GitHubStatSection />
                </Suspense>
                <ProjectSection />
                <CertificatesSection />
                <Contact />
              </WarpedUI>
              <NavigationBar />
            </WarpViewport>
          </WarpProvider>
          <GlobalModal />
        </ModalProvider>
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
  </StrictMode>,
);
