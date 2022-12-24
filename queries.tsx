import { graphql } from 'utils/gql';

export const GET_CONTESTANTS = graphql(`
  query Contestants {
    contestants {
      name
    }
  }
`);
