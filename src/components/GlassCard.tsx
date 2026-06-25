import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  glow?: boolean;
}

const GlassCard = ({ children, delay = 0, glow = false }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: glow
          ? '0 0 60px rgba(255, 94, 156, 0.3)'
          : '0 25px 50px rgba(0, 0, 0, 0.3)',
      }}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '24px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Gradient Border Animation */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background:
            'conic-gradient(transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, rgba(255, 94, 156, 0.1))',
          opacity: 0,
        }}
        className="gradient-border-animation"
      />

      {glow && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '150%',
            height: '150%',
            background:
              'radial-gradient(circle, rgba(255, 94, 156, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>

      <style>{`
        .gradient-border-animation:hover {
          opacity: 1;
        }
      `}</style>
    </motion.div>
  );
};

export default GlassCard;
