import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Aurora Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 94, 156, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 30% 60%, rgba(192, 132, 252, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 70% 80%, rgba(255, 214, 232, 0.15) 0%, transparent 50%)
          `,
        }}
      />

      {/* Animated Light Streaks */}
      <motion.div
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '30%',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 94, 156, 0.5), transparent)',
          filter: 'blur(1px)',
        }}
      />

      <motion.div
        animate={{
          x: ['200%', '-100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '60%',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(192, 132, 252, 0.5), transparent)',
          filter: 'blur(1px)',
        }}
      />

      <motion.div
        style={{
          y,
          opacity,
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '900px',
        }}
        className="hero-content"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '50px',
            marginBottom: '32px',
          }}
        >
          <span style={{ fontSize: '14px', color: 'var(--primary)' }}>✨</span>
          <span
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
            }}
          >
            AI-Powered Beauty Experience
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: 700,
            lineHeight: '1.1',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FF5E9C 50%, #C084FC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Discover Your
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #FF5E9C, #C084FC, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Perfect Glow
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'var(--text-secondary)',
            marginBottom: '48px',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Experience premium beauty treatments enhanced by AI technology.
          Unlock your natural radiance with our personalized care approach.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(255, 94, 156, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '18px 40px',
              background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
              border: 'none',
              borderRadius: '16px',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 8px 30px rgba(255, 94, 156, 0.4)',
            }}
          >
            Start Your Journey
            <span>→</span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: 'var(--primary)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '18px 40px',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              color: 'var(--text-primary)',
              fontSize: '16px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>▶</span>
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '48px',
            marginTop: '80px',
          }}
        >
          {[
            { number: '50K+', label: 'Happy Clients' },
            { number: '200+', label: 'Treatments' },
            { number: '15+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.number}
              </motion.div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          boxShadow: '0 10px 40px rgba(255, 94, 156, 0.3)',
        }}
      >
        💄
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '8%',
          width: '50px',
          height: '50px',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
        }}
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '5%',
          width: '40px',
          height: '40px',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
        }}
      >
        💆‍♀️
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontSize: '12px',
            color: 'var(--text-muted)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '2px',
            height: '20px',
            background: 'linear-gradient(to bottom, var(--primary), transparent)',
            borderRadius: '2px',
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
