import { NextApiHandler } from 'next';
import type { Readable } from 'node:stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

const HASURA_GRAPHQL_URL = process.env.HASURA_GRAPHQL_URL;

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

const graphqlProxyHandler: NextApiHandler = async function GraphqlProxy(
  req,
  res
) {
  if (req.method === 'POST') {
    try {
      if (!HASURA_GRAPHQL_URL) {
        throw Error('Missing required env variable HASURA_GRAPHQL_URL');
      }

      const response = await fetch(HASURA_GRAPHQL_URL, {
        method: 'POST',
        body: await buffer(req),
        headers: { 'x-hasura-admin-secret': 'myadminsecretkey' },
      });

      const json = await response.json();

      return res.status(response.status).json(json);
    } catch (err) {
      return res
        .status(500)
        .send({ error: { message: 'Internal Server Error' } });
    }
  }
  return res.status(405).send({ error: { message: 'Method Not Allowed' } });
};

export default graphqlProxyHandler;
