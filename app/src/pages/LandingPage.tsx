import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import HeroSection from '@/components/HeroSection';
import { collections } from '@/lib/products';

export default function LandingPage() {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
      {collections.map((collection) => (
        <HeroSection
          key={collection.id}
          id={collection.id}
          category={collection.label}
          title={collection.title}
          cta={collection.cta}
          ctaHref={collection.ctaHref}
          image={collection.image}
          imageAlt={collection.imageAlt}
        />
      ))}
    </motion.div>
  );
}
