import globalStyles from '../styles/global';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      {children}
      {/* <style jsx global>
        {globalStyles}
      </style> */}
    </div>
  );
};

export default Layout;
