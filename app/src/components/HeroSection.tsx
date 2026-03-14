import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, ANIMATION } from '@/lib/animations';

interface HeroSectionProps {
  category: string;
  title: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  id?: string;
}

export default function HeroSection({
  category,
  title,
  cta,
  ctaHref,
  image,
  imageAlt,
  id,
}: HeroSectionProps) {
  return (
    <section id={id} className="section-full">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
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
          loading="lazy"
        />
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hero-overlay"
      >
        <motion.p variants={fadeInUp} className="hero-category">
          {category}
        </motion.p>
        <motion.h2 variants={fadeInUp} className="hero-title max-w-md">
          {title}
        </motion.h2>
        <motion.a
          variants={fadeInUp}
          href={ctaHref}
          className="hero-cta"
        >
          {cta}
        </motion.a>
      </motion.div>
    </section>
  );
}
