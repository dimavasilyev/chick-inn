import Header from './header';

const Layout = ({ children }) => {
  return (
    <div style={{ color: 'blue' }}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
