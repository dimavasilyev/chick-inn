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
            background:
              linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
              linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
              linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
              linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
              linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
              linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
            background-color: #131313;
            background-size: 20px 20px;
          }

            {/* background-image: url('${backgroundImage}'); */}


          .content {
            padding-top: 6em;
          }
        `}
      </style>
    </main>
  );
};

export default Layout;
