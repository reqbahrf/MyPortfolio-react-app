import { motion } from 'motion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
interface ShowcaseGeneratorProps {
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export default function ShowcaseGenerator({ items }: ShowcaseGeneratorProps) {
  return (
    <div className='space-y-20 py-10'>
      {items.map((feature, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center justify-between gap-10 md:flex-row ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Image */}
          <div className='flex h-auto w-full justify-center md:w-1/2'>
            <div className='group relative w-full'>
              {/* Decorative accent background behind image */}
              <div className='bg-sage/5 group-hover:bg-clay/5 absolute -inset-2 rounded-3xl transition-colors duration-500' />

              <LazyLoadImage
                effect='blur'
                src={feature.image}
                className='border-app-text/5 relative z-10 w-full rounded-2xl border object-contain shadow-2xl md:h-[400px]'
                alt={feature.title}
              />
            </div>
          </div>

          {/* Text */}
          <div className='w-full px-4 text-center md:w-1/2 md:text-left'>
            <h3 className='font-display mb-4 text-3xl font-bold text-black dark:text-white'>
              <span className='text-clay/50 font-body mr-4 text-xl italic'>
                0{index + 1}.
              </span>
              {feature.title}
            </h3>
            <p className='font-body text-base leading-relaxed text-black/80 md:text-lg dark:text-white/80'>
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
