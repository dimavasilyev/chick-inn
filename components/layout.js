import Header from './header';
import Meta from './meta';

import backgroundImage from '../assets/background.jpg';

const Layout = ({ children }) => {
  return (
    <main className="main-container">
      <div className="container text-white">
        <Meta />
        <Header />
        {children}
      </div>
      <style jsx>
        {`
          .main-container {
            width: 100%;
            height: 100%;

            background-image: url('${backgroundImage}');
          }
        `}
      </style>
    </main>
  );
};

export default Layout;
