import { AnimatePresence } from 'framer-motion';

import useScroll from '../../hooks/useScroll';
import styles from './Layout.module.css';

import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import ToTop from './ToTop/ToTop';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const toTop = useScroll();

  return (
    <div className={styles.layout}>
      <Navbar />
      <AnimatePresence>{toTop > 200 && <ToTop />}</AnimatePresence>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
