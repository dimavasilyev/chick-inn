import Header from './header/header';
import Footer from './footer/footer';
import Meta from './meta';

import backgroundImage from '../assets/background.jpg';

const Layout = ({ children }) => {
  return (
    <main className="main-container">
      <Meta />
      <div className="container text-white">
        <Header />
        <div className="content">{children}</div>
      </div>
      <Footer />
      <style jsx>
        {`
          .main-container {
            width: 100vw;
            height: 100%;
            overflow-y: scroll;
            background-image: url('${backgroundImage}');
            display: grid;
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
