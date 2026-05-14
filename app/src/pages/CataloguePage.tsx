import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { products } from '@/lib/products';

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-white pt-[60px]">
      {/* Page header */}
      <div className="border-b border-mm-gray-200 px-6 md:px-12 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-[10px] uppercase tracking-mm-wide text-mm-gray-500 mb-2">
            Mona Matthews
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-normal">
            The Collection
          </h1>
        </motion.div>
      </div>

      {/* Product grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 gap-px bg-mm-gray-200"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={fadeInUp}
            className="bg-white group cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="product-card-image"
              />
            </div>
            <div className="px-4 py-5">
              <p className="text-[10px] uppercase tracking-mm-wide text-mm-gray-400 mb-1">
                {product.category.replace('-', ' ')}
              </p>
              <h3 className="font-display text-base font-normal mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-mm-gray-500">
                {product.description}
              </p>
              <a
                href="https://wa.me/2348023055212"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[11px] uppercase tracking-mm-wide underline underline-offset-4 hover:opacity-60 transition-opacity"
              >
                Enquire
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bespoke CTA */}
      <div className="border-t border-mm-gray-200 px-6 md:px-12 py-16 md:py-20 text-center">
        <p className="text-[10px] uppercase tracking-mm-wide text-mm-gray-400 mb-4">
          Beyond the Collection
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-normal mb-4">
          Made to Order
        </h2>
        <p className="text-sm text-mm-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
          Can't find exactly what you're looking for? We craft bespoke pieces
          tailored to your specifications — size, material, finish.
        </p>
        <a
          href="https://wa.me/2348023055212"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[11px] uppercase tracking-mm-wide underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
