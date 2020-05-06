import React from 'react';
import Head from 'next/head';

import Layout from '../components/layout';

const Index = () => {
  return (
    <>
      <Head>
        <title>Chik'inn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/assets/favicon_medium.png" type="image/png" />
      </Head>
      <Layout>Hello world change</Layout>
    </>
  );
};

export default Index;
