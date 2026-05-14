import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, ANIMATION } from '@/lib/animations';

interface HeroSectionProps {
  id?: string;
  category: string;
  title: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
}

export default function HeroSection({
  id,
  category,
  title,
  cta,
  ctaHref,
  image,
  imageAlt,
  priority = false,
}: HeroSectionProps) {
  const isExternal = ctaHref.startsWith('http');

  return (
    <section id={id} className="section-full">
      {/* Background image — always visible, no opacity animation.
          Scale subtly animates when the section scrolls into view. */}
      <motion.div
        initial={{ scale: 1.03 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: ANIMATION.duration.slower,
          ease: ANIMATION.easing.standard,
        }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={imageAlt}
          className="bg-full"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </motion.div>

      {/* Top gradient — keeps header readable */}
      <div className="hero-top-gradient" />

      {/* Bottom gradient — keeps text readable */}
      <div
        className="absolute inset-x-0 bottom-0 h-56 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
      />

      {/* Text overlay — on first section animate on mount; on all others animate on scroll */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        {...(priority
          ? { animate: 'visible' }
          : { whileInView: 'visible', viewport: { once: true } })}
        className="hero-overlay"
      >
        {category && (
          <motion.p variants={fadeInUp} className="hero-category">
            {category}
          </motion.p>
        )}
        {title && (
          <motion.h2 variants={fadeInUp} className="hero-title">
            {title}
          </motion.h2>
        )}
        <motion.div variants={fadeInUp}>
          {isExternal ? (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="hero-cta">
              {cta}
            </a>
          ) : (
            <a href={ctaHref} className="hero-cta">
              {cta}
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
