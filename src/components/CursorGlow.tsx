import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          top: 0,
          left: 0,
        }}
      />
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          background: 'radial-gradient(circle, rgba(255, 94, 156, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          top: 0,
          left: 0,
          filter: 'blur(8px)',
        }}
      />
    </>
  );
};

export default CursorGlow;
