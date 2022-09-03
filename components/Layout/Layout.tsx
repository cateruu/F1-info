import styles from './Layout.module.css';

import Navbar from './Navbar/Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
