import Head from 'next/head';
import favicon from '../assets/logo_medium.png';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>Chick'Inn{title ? ` - ${title}` : ''}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href={favicon} />

    
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
    </Head>
  );
};

export default Meta;
