import HeroSection from '@/components/HeroSection';
import { collections } from '@/lib/products';

export default function LandingPage() {
  return (
    <div>
      {collections.map((collection, index) => (
        <HeroSection
          key={collection.id}
          id={collection.id}
          category={collection.label}
          title={collection.title}
          cta={collection.cta}
          ctaHref={collection.ctaHref}
          image={collection.image}
          imageAlt={collection.imageAlt}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
