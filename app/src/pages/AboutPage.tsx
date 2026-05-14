import { motion } from 'framer-motion';
import { ANIMATION } from '@/lib/animations';

const pillars = [
  {
    title: 'Inclusive Sizing, Refined Design',
    body: 'Elegantly crafted shoes designed with care for larger sizes — because style should never feel limiting.',
  },
  {
    title: 'Handcrafted Excellence',
    body: 'Each pair is made with meticulous attention to detail and precision — no shortcuts, no compromises.',
  },
  {
    title: 'Made in Lagos',
    body: 'Proudly designed and crafted in Nigeria, carrying the spirit of Lagos in every stitch.',
  },
  {
    title: 'Premium Materials',
    body: 'Only the finest leathers, fabrics, and hardware — selected for lasting quality and feel.',
  },
  {
    title: 'Comfort & Elegance',
    body: 'Designed for those who refuse to choose between style and comfort. You deserve both.',
  },
  {
    title: 'Bespoke Craftsmanship',
    body: 'Select designs are finished by hand to ensure perfect balance, comfort, and proportion.',
  },
];

const testimonials = [
  {
    quote:
      "The craftsmanship is truly exceptional. I've never found shoes in my size that feel this luxurious — Mona Matthews changed that completely.",
    name: 'Adaeze O.',
    location: 'Lagos, Nigeria',
  },
  {
    quote:
      'Elegant, comfortable, and made with such attention to detail. These shoes make you feel seen — and incredibly stylish.',
    name: 'Chidinma E.',
    location: 'Abuja, Nigeria',
  },
  {
    quote:
      "I ordered the Ankle Boot and it arrived beautifully packaged. The quality speaks for itself — I'll be a repeat customer for life.",
    name: 'Folake A.',
    location: 'London, UK',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-[60px]">
      {/* Hero */}
      <div className="border-b border-mm-gray-200 px-6 md:px-20 lg:px-32 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[10px] uppercase tracking-mm-wide text-mm-gray-400 mb-4">
            Established 2002 · Lagos, Nigeria
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-8">
            About Mona Matthews
          </h1>
          <p className="text-sm md:text-base text-mm-gray-600 leading-relaxed mb-5">
            Mona Matthews is a Nigerian luxury footwear brand focused on timeless
            design, quality craftsmanship, and attention to detail. Each pair is
            thoughtfully made to balance elegance, comfort, and durability —
            designed for men and women who value style that lasts.
          </p>
          <p className="text-sm md:text-base text-mm-gray-600 leading-relaxed">
            We are especially committed to creating beautifully proportioned
            footwear in larger sizes — ensuring that every man and woman with
            bigger feet experiences the same confidence, grace, and refinement,
            without compromise.
          </p>
        </motion.div>
      </div>

      {/* Pillars */}
      <div className="px-6 md:px-20 lg:px-32 py-16 md:py-24 border-b border-mm-gray-200">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] uppercase tracking-mm-wide text-mm-gray-400 mb-10"
        >
          Why Mona Matthews
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: ANIMATION.duration.slower,
                delay: i * 0.08,
                ease: ANIMATION.easing.standard as [number, number, number, number],
              }}
            >
              <div className="w-6 h-px bg-mm-gold mb-5" />
              <h3 className="font-display text-lg font-normal mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-mm-gray-500 leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-6 md:px-20 lg:px-32 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] uppercase tracking-mm-wide text-mm-gray-400 mb-10"
        >
          What Our Clients Say
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: ANIMATION.duration.slower,
                delay: i * 0.1,
                ease: ANIMATION.easing.standard as [number, number, number, number],
              }}
              className="flex flex-col"
            >
              <p className="font-display text-base italic font-normal text-mm-gray-700 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-mm-gray-400">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
