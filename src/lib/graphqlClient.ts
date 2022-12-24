import { createClient } from 'urql';

export const createBrowserGraphQLClient = () =>
  createClient({
    url: '/api/graphql/proxy',
  });
