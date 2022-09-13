import { useLayoutEffect, useState } from 'react';

const useScroll = () => {
  const [toTop, setToTop] = useState<number>(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setToTop(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return toTop;
};

export default useScroll;
