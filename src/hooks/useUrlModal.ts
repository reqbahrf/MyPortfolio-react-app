import { useEffect, useState } from 'react';

export const useUrlModal = () => {
  const [urlModalId, setUrlModalId] = useState<string | null>(null);

  useEffect(() => {
    const getUrlModalId = () => {
      if (typeof window === 'undefined') return null;

      const params = new URLSearchParams(window.location.search);
      const modalId = params.get('open_modal');
      return modalId;
    };

    // Check on mount
    const modalId = getUrlModalId();
    setUrlModalId(modalId);

    // Listen for URL changes
    const handlePopState = () => {
      const modalId = getUrlModalId();
      setUrlModalId(modalId);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const updateUrlModal = (modalId: string | null) => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);

    if (modalId) {
      url.searchParams.set('open_modal', modalId);
    } else {
      url.searchParams.delete('open_modal');
    }

    const newUrl = url.toString();
    if (newUrl !== window.location.href) {
      window.history.pushState({}, '', newUrl);
    }
  };

  return { urlModalId, updateUrlModal };
};
