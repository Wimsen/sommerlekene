import { AppProps } from 'next/app';
import { Provider } from 'urql';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { createBrowserGraphQLClient } from '@/lib/graphqlClient';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={createBrowserGraphQLClient()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
