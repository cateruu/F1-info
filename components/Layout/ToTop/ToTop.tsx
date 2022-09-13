import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './ToTop.module.css';

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ToTop = () => {
  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={{ duration: 0.5 }}
      className={styles.top}
      onClick={scrollTop}
    >
      <Image
        src='/bolid.png'
        alt='to top'
        width={60}
        height={70}
        className={styles.bolid}
      />
    </motion.div>
  );
};

export default ToTop;
