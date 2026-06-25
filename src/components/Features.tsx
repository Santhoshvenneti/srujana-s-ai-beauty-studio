import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Analysis',
    description:
      'Our cutting-edge AI analyzes over 50 skin parameters to create your personalized treatment plan.',
    stat: '98%',
    statLabel: 'Accuracy',
  },
  {
    icon: '🎯',
    title: 'Personalized Treatments',
    description:
      'Every treatment is uniquely tailored to your skin type, goals, and preferences.',
    stat: '10K+',
    statLabel: 'Custom Plans',
  },
  {
    icon: '🔬',
    title: 'Premium Products',
    description:
      'We use only certified premium and organic products from leading beauty brands.',
    stat: '50+',
    statLabel: 'Brands',
  },
  {
    icon: '⏰',
    title: 'Real-Time Progress',
    description:
      'Track your skin transformation journey with our advanced monitoring system.',
    stat: '24/7',
    statLabel: 'Monitoring',
  },
];

const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      const suffix = value.replace(/[0-9]/g, '');
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start) + suffix);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const Features = () => {
  return (
    <section
      id="features"
      style={{
        position: 'relative',
        padding: '120px 24px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(192, 132, 252, 0.05) 50%, transparent 100%)',
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--primary)',
              marginBottom: '16px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Why Choose Us
          </span>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Transform
            </span>{' '}
            Your
            <br />
            Beauty Journey
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                padding: '40px',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(255, 94, 156, 0.1) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '24px',
                  boxShadow: '0 8px 30px rgba(255, 94, 156, 0.3)',
                }}
              >
                {feature.icon}
              </motion.div>

              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'var(--text-primary)',
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}
              >
                {feature.description}
              </p>

              {/* Stat */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <AnimatedCounter value={feature.stat} />
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                  }}
                >
                  {feature.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '80px',
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
              boxShadow: '0 8px 30px rgba(255, 94, 156, 0.4)',
            }}
          >
            Experience AI Beauty Analysis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
