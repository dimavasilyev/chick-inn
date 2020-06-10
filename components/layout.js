import Header from './header/header';
import Footer from './footer/footer';
import Meta from './meta';

import backgroundImage from '../assets/background.jpg';

const Layout = ({ children }) => {
  return (
    <main className="main-container ">
      <Meta />
      <div className="container text-white ">
        <Header />
        <div className="content px-6 sm:px-8 lg:px-0">{children}</div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
      <style jsx>
        {`
          .main-container {
            width: 100vw;
            height: 100%;
            overflow-y: scroll;
            background-image: url('${backgroundImage}');
            display: grid;
            scroll-behavior: smooth;
          }

          .content {
            padding-top: 130px;
          }
        `}
      </style>
    </main>
  );
};

export default Layout;
