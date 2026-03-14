import { motion } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { fadeIn } from '@/lib/animations';

// Hero sections data
const heroSections = [
  {
    id: 'fashion',
    category: 'Fashion',
    title: 'Spring Summer 2026 Collection',
    cta: 'See More',
    ctaHref: '#',
    image: '/assets/fashion-spring-summer-2026.png',
    imageAlt: 'CHANEL Spring Summer 2026 Collection',
  },
  {
    id: 'fragrance',
    category: 'Fragrance',
    title: 'NEW EDITION',
    cta: 'See more',
    ctaHref: '#',
    image: '/assets/fragrance-n5-new.jpg',
    imageAlt: 'N°5 Eau de Toilette New Edition',
  },
  {
    id: 'watches',
    category: '',
    title: '',
    cta: 'Discover',
    ctaHref: '#',
    image: '/assets/watches-j12.jpg',
    imageAlt: 'The J12 Watch',
  },
  {
    id: 'makeup',
    category: 'Makeup',
    title: 'ROUGE ALLURE VELVET – LIMITED EDITION',
    cta: 'See more',
    ctaHref: '#',
    image: '/assets/makeup-rouge-allure.jpg',
    imageAlt: 'Limited-Edition ROUGE ALLURE VELVET',
  },
  {
    id: 'fine-jewelry',
    category: 'Fine Jewelry',
    title: 'COCO CRUSH',
    cta: 'See more',
    ctaHref: '#',
    image: '/assets/fine-jewelry-coco-crush.jpg',
    imageAlt: 'COCO CRUSH Collection',
  },
  {
    id: 'skincare',
    category: 'Skincare',
    title: 'NEW SUBLIMAGE LE BAUME',
    cta: 'See more',
    ctaHref: '#',
    image: '/assets/skincare-sublimage.jpg',
    imageAlt: 'SUBLIMAGE Le Baume',
  },
  {
    id: 'eyewear',
    category: 'Eyewear',
    title: 'SPRING SUMMER 2026 Selection',
    cta: 'See More',
    ctaHref: '#',
    image: '/assets/eyewear-spring-summer.jpg',
    imageAlt: 'Spring Summer 2026 Eyewear',
  },
  {
    id: 'high-jewelry',
    category: 'High Jewelry',
    title: 'LION COLLECTION',
    cta: 'See more',
    ctaHref: '#',
    image: '/assets/high-jewelry-lion.jpg',
    imageAlt: 'LION Collection High Jewelry',
  },
  {
    id: 'haute-couture',
    category: 'Haute Couture',
    title: 'Spring Summer 2026 Show',
    cta: 'See more',
    ctaHref: '#',
    image: '/assets/haute-couture-spring-summer.jpg',
    imageAlt: 'Spring Summer 2026 Haute Couture Show',
  },
];

function App() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white"
    >
      <Header />
      
      <main className="pt-[60px]">
        {heroSections.map((section) => (
          <HeroSection
            key={section.id}
            id={section.id}
            category={section.category}
            title={section.title}
            cta={section.cta}
            ctaHref={section.ctaHref}
            image={section.image}
            imageAlt={section.imageAlt}
          />
        ))}
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
