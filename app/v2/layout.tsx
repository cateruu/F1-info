import React from 'react';
import styles from './Layout.module.css';

import { AnimatePresence } from 'framer-motion';

import useScroll from '../../hooks/useScroll';

import Navbar from '../../components/Layout/Navbar/Navbar';
import ToTop from '../../components/Layout/ToTop/ToTop';
import Footer from '../../components/Layout/Footer/Footer';

const layout = ({ children }: { children: React.ReactNode }) => {
  // const toTop = useScroll();

  return (
    <div className={styles.layout}>
      <Navbar />
      {/* <AnimatePresence>{toTop > 200 && <ToTop />}</AnimatePresence> */}
      {children}
      <Footer />
    </div>
  );
};

export default layout;
