import { useEffect, useState } from 'react';

export const useResponsive = () => {
  const [responsive, setResponsive] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1120) setResponsive('desktop');
      if (window.innerWidth <= 1120) setResponsive('notebook');
      if (window.innerWidth <= 750) setResponsive('tablet');
      if (window.innerWidth <= 540) setResponsive('mobile');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { responsive };
};