import { signOut } from 'next-auth/react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import WithAuthentication, {
  AuthenticatedProps,
} from '@/components/WithAuthentication';

const IndexPage: React.FC<AuthenticatedProps<unknown>> = ({ session }) => (
  <Layout>
    <main>
      <pre className='text-xs'>{JSON.stringify(session, null, 2)}</pre>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <h1 className='mt-4'>Sommerlekene</h1>
          <p className='mt-2 text-sm text-gray-800'>
            Her vil det dukke opp legendariske ting
          </p>
        </div>
      </section>
    </main>
    <Seo />
    <button onClick={() => signOut()}>Logg ut </button>
  </Layout>
);

export default WithAuthentication(IndexPage);
