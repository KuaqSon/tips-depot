import Router from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

export default function NProgressBar({
  startPosition = 0.3,
  stopDelayMs = 50,
  showOnShallow = true,
  options,
}: {
  startPosition?: number;
  stopDelayMs?: number;
  showOnShallow?: boolean;
  options?: Partial<NProgress.NProgressOptions>;
}) {
  let timer: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (options) {
      NProgress.configure(options);
    }
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);
    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const routeChangeStart = (
    _: string,
    {
      shallow,
    }: {
      shallow: boolean;
    }
  ) => {
    if (!shallow || showOnShallow) {
      NProgress.set(startPosition);
      NProgress.start();
    }
  };

  const routeChangeEnd = (
    _: string,
    {
      shallow,
    }: {
      shallow: boolean;
    }
  ) => {
    if (!shallow || showOnShallow) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        NProgress.done(true);
      }, stopDelayMs);
    }
  };

  return null;
}
