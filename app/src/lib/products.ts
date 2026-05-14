export interface Collection {
  id: string;
  label: string;
  title: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const collections: Collection[] = [
  {
    id: 'new-collection',
    label: 'New Collection',
    title: 'Spring Summer 2026',
    cta: 'Explore',
    ctaHref: '/catalogue',
    image: '/assets/fashion-spring-summer-2026.jpg',
    imageAlt: 'Mona Matthews Spring Summer 2026 Collection',
  },
  {
    id: 'artisan-range',
    label: 'Artisan Range',
    title: 'Handcrafted Excellence',
    cta: 'Explore',
    ctaHref: '/catalogue#artisan-range',
    image: '/assets/haute-couture-spring-summer.jpg',
    imageAlt: 'Mona Matthews Artisan Range',
  },
  {
    id: 'evening',
    label: 'Evening',
    title: 'Made for the Moment',
    cta: 'Explore',
    ctaHref: '/catalogue#evening',
    image: '/assets/high-jewelry-lion.jpg',
    imageAlt: 'Mona Matthews Evening Collection',
  },
  {
    id: 'classic-pump',
    label: 'Classic Pump',
    title: 'Timeless by Design',
    cta: 'Explore',
    ctaHref: '/catalogue#classic-pump',
    image: '/assets/watches-j12.jpg',
    imageAlt: 'Mona Matthews Classic Pump Collection',
  },
  {
    id: 'bespoke',
    label: 'Bespoke',
    title: 'Crafted for You',
    cta: 'Enquire',
    ctaHref: 'https://wa.me/2348023055212',
    image: '/assets/fine-jewelry-coco-crush.jpg',
    imageAlt: 'Mona Matthews Bespoke Collection',
  },
  {
    id: 'everyday',
    label: 'Everyday',
    title: 'Refined for Daily Life',
    cta: 'Explore',
    ctaHref: '/catalogue#everyday',
    image: '/assets/eyewear-spring-summer.jpg',
    imageAlt: 'Mona Matthews Everyday Collection',
  },
  {
    id: 'boots',
    label: 'Boots',
    title: 'Modern Attitude',
    cta: 'Explore',
    ctaHref: '/catalogue#boots',
    image: '/assets/fragrance-n5-new.jpg',
    imageAlt: 'Mona Matthews Boots Collection',
  },
  {
    id: 'sandals',
    label: 'Sandals',
    title: 'Open to the Season',
    cta: 'Explore',
    ctaHref: '/catalogue#sandals',
    image: '/assets/skincare-sublimage.jpg',
    imageAlt: 'Mona Matthews Sandals Collection',
  },
  {
    id: 'made-to-order',
    label: 'Made to Order',
    title: 'Your Vision, Our Craft',
    cta: 'Get in Touch',
    ctaHref: 'https://wa.me/2348023055212',
    image: '/assets/makeup-rouge-allure.jpg',
    imageAlt: 'Mona Matthews Made to Order',
  },
];

export const products: Product[] = [
  {
    id: 'classic-leather-pump',
    name: 'Classic Leather Pump',
    description: 'Timeless elegance for any occasion',
    image: '/images/products/classic-leather-pump.webp',
    category: 'classic-pump',
  },
  {
    id: 'artisan-sandal',
    name: 'Artisan Sandal',
    description: 'Handcrafted comfort meets sophistication',
    image: '/images/products/artisan-sandal.webp',
    category: 'artisan-range',
  },
  {
    id: 'evening-stiletto',
    name: 'Evening Stiletto',
    description: 'Statement elegance for special moments',
    image: '/images/products/evening-stiletto.webp',
    category: 'evening',
  },
  {
    id: 'everyday-loafer',
    name: 'Everyday Loafer',
    description: 'Refined comfort for daily wear',
    image: '/images/products/everyday-loafer.webp',
    category: 'everyday',
  },
  {
    id: 'ankle-boot',
    name: 'Ankle Boot',
    description: 'Modern styling with classic appeal',
    image: '/images/products/ankle-boot.webp',
    category: 'boots',
  },
  {
    id: 'strappy-heel',
    name: 'Strappy Heel',
    description: 'Bold design, exceptional craftsmanship',
    image: '/images/products/strappy-heel.webp',
    category: 'sandals',
  },
];
