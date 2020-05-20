import Header from './header/header';
import Meta from './meta';

import backgroundImage from '../assets/background.jpg';

const Layout = ({ children }) => {
  return (
    <main className="main-container">
      <div className="container text-white">
        <Meta />
        <Header />
        <div className="content">{children}</div>
      </div>
      <style jsx>
        {`
          .main-container {
            width: 100vw;
            height: 100%;
            overflow-y: scroll;
            background-image: url('${backgroundImage}');
          }

          .content {
            padding-top: 6em;
          }
        `}
      </style>
    </main>
  );
};

export default Layout;
