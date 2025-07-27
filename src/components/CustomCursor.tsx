
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const blurElement = document.querySelector('body::before') as HTMLElement;
      const dotElement = document.querySelector('body::after') as HTMLElement;
      
      // Update CSS custom properties for cursor position
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
