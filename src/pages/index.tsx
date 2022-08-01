import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
const IndexPage = () => (
  <Layout>
    <main>
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
  </Layout>
);

export default IndexPage;
