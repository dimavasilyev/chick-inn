import Head from 'next/head';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>Chick'Inn{title ? ` - ${title}` : ''}</title>
    </Head>
  );
};

export default Meta;
