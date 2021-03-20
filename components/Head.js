import Head from 'next/head';

const HeadCustom = ({ title = '' }) => (
  <Head>
    <title>{title !== '' ? `${title} | Yael Mamaniya Portfolio` : 'Yael Mamaniya Portfolio'}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default HeadCustom;
