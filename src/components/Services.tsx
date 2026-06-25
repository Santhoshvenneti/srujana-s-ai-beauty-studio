import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const services = [
  {
    icon: '💄',
    title: 'AI Skin Analysis',
    description:
      'Advanced AI technology analyzes your skin type, concerns, and recommends personalized treatments.',
    color: '#FF5E9C',
  },
  {
    icon: '✨',
    title: 'Premium Facials',
    description:
      'Luxurious facial treatments with premium products tailored to your unique skin needs.',
    color: '#C084FC',
  },
  {
    icon: '💆‍♀️',
    title: 'Spa & Wellness',
    description:
      'Relaxing spa experiences combining traditional techniques with modern innovations.',
    color: '#FFD700',
  },
  {
    icon: '🌸',
    title: 'Makeup Artistry',
    description:
      'Professional makeup services for any occasion, from natural looks to glamorous transformations.',
    color: '#FF5E9C',
  },
  {
    icon: '💎',
    title: 'Anti-Aging',
    description:
      'Cutting-edge treatments that reduce signs of aging and restore youthful radiance.',
    color: '#C084FC',
  },
  {
    icon: '🌿',
    title: 'Organic Treatments',
    description:
      'Natural and organic beauty treatments for those who prefer clean beauty solutions.',
    color: '#4ADE80',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      style={{
        position: 'relative',
        padding: '120px 24px',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

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
          style={{ textAlign: 'center', marginBottom: '64px' }}
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
            Our Services
          </span>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #FFFFFF, #FF5E9C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Premium Beauty
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experiences
            </span>
          </h2>
          <p
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--text-secondary)',
              fontSize: '18px',
            }}
          >
            Discover our range of AI-enhanced beauty treatments designed to
            bring out your natural radiance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <motion.div
                style={{
                  width: '64px',
                  height: '64px',
                  background: `linear-gradient(135deg, ${service.color}33, ${service.color}11)`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '20px',
                }}
              >
                {service.icon}
              </motion.div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'var(--text-primary)',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                }}
              >
                {service.description}
              </p>
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: service.color,
                  fontWeight: 500,
                  fontSize: '15px',
                }}
              >
                Learn more <span>→</span>
              </motion.a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
