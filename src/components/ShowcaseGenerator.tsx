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
    <div className='space-y-20'>
      {items.map((feature, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center justify-between gap-10 md:flex-row ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Image */}
          <div className='flex h-auto w-auto justify-center md:w-1/2'>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={feature.image}
              className='w-full rounded-2xl object-contain shadow-lg sm:h-[200px] md:h-[400px]'
              alt={feature.title}
            />
          </div>

          {/* Text */}
          <div className='w-full text-center md:w-1/2 md:text-left'>
            <h3 className='mb-3 text-2xl font-semibold text-gray-800 dark:text-white'>
              {feature.title}
            </h3>
            <p className='indent-6 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300'>
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
