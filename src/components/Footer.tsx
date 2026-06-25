import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    Services: ['AI Skin Analysis', 'Premium Facials', 'Spa & Wellness', 'Makeup Artistry'],
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Support: ['Contact', 'FAQ', 'Privacy', 'Terms'],
    Connect: ['Instagram', 'Twitter', 'Facebook', 'Pinterest'],
  };

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        padding: '80px 24px 40px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(255, 94, 156, 0.05) 100%)',
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}
              >
                ✨
              </div>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '24px',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Luxe Glow AI
              </span>
            </motion.div>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '24px',
              }}
            >
              Experience the future of beauty with AI-powered treatments that reveal your natural radiance.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {['📷', '🐦', '👤', '📌'].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: 'var(--text-primary)',
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {links.map((link, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '15px',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            padding: '40px',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <h3
            style={{
              fontSize: '28px',
              fontWeight: 600,
              marginBottom: '12px',
            }}
          >
            Subscribe to Our Newsletter
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '24px',
            }}
          >
            Get exclusive offers, beauty tips, and be the first to know about new treatments.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '500px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '16px 24px',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none',
              }}
            />
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(255, 94, 156, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #FF5E9C, #C084FC)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid var(--glass-border)',
          }}
        >
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '14px',
            }}
          >
            © 2024 Luxe Glow AI. All rights reserved.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '24px',
            }}
          >
            <a
              href="#"
              style={{
                color: 'var(--text-muted)',
                fontSize: '14px',
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: 'var(--text-muted)',
                fontSize: '14px',
              }}
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={{
                color: 'var(--text-muted)',
                fontSize: '14px',
              }}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
