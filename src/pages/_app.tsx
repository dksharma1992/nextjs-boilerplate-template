import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { setupStoreWrapper } from '../Redux/store';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, ...rest }: AppPropsWithLayout) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  const { store, props } = setupStoreWrapper.useWrappedStore(rest);

  const { pageProps } = props;

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
