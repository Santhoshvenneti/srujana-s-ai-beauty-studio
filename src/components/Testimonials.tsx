import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fashion Designer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop',
    content:
      'The AI skin analysis completely changed my skincare routine. I finally understand what my skin needs!',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Model',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop',
    content:
      'Luxe Glow AI treatments have given me the most radiant skin of my career. Absolutely transformative!',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    role: 'Business Executive',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=150&h=150&fit=crop',
    content:
      'The personalized approach and premium products make every visit feel like a luxury escape.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Yoga Instructor',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=150&h=150&fit=crop',
    content:
      'Natural, organic treatments that align with my lifestyle. The results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Amanda White',
    role: 'Interior Designer',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=150&h=150&fit=crop',
    content:
      'From consultation to treatment, every detail is perfectly curated. True luxury experience.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        padding: '120px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-200px',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(255, 94, 156, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
            Testimonials
          </span>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              marginBottom: '24px',
            }}
          >
            Loved by{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Thousands
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
            Hear from our clients who have experienced the transformative power of our treatments.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Main Testimonial Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '32px',
              padding: '48px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Quote Icon */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '32px',
                fontSize: '48px',
                opacity: 0.2,
                color: 'var(--primary)',
              }}
            >
              "
            </div>

            {/* Avatar */}
            <motion.img
              src={testimonials[activeIndex].avatar}
              alt={testimonials[activeIndex].name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring' }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '24px',
                boxShadow: '0 8px 30px rgba(255, 94, 156, 0.3)',
              }}
            />

            {/* Stars */}
            <div style={{ marginBottom: '20px' }}>
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} style={{ color: '#FFD700', fontSize: '20px' }}>
                  ★
                </span>
              ))}
            </div>

            {/* Content */}
            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: 'var(--text-primary)',
                marginBottom: '32px',
                fontStyle: 'italic',
              }}
            >
              "{testimonials[activeIndex].content}"
            </p>

            {/* Name & Role */}
            <div>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '4px',
                  background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {testimonials[activeIndex].name}
              </h4>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                }}
              >
                {testimonials[activeIndex].role}
              </p>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '32px',
            }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: index === activeIndex ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background:
                    index === activeIndex
                      ? 'linear-gradient(135deg, #FF5E9C, #C084FC)'
                      : 'var(--glass-border)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'width 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '-60px',
              right: '-60px',
              display: 'flex',
              justifyContent: 'space-between',
              pointerEvents: 'none',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              style={{
                width: '48px',
                height: '48px',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                fontSize: '18px',
                cursor: 'pointer',
                pointerEvents: 'auto',
              }}
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
              style={{
                width: '48px',
                height: '48px',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                fontSize: '18px',
                cursor: 'pointer',
                pointerEvents: 'auto',
              }}
            >
              →
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div:last-child button:first-of-type,
          section > div > div:last-child button:last-of-type {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
