import { motion } from 'motion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ImageItem {
  title: string;
  description: string;
  image: string;
}

interface BreakdownShowcaseProps {
  final: ImageItem;
  rawAssets: ImageItem[];
}

export default function BreakdownShowcase({
  final,
  rawAssets,
}: BreakdownShowcaseProps) {
  return (
    <section className='space-y-20'>
      {/* Final Photo Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='space-y-6 text-center'
      >
        <LazyLoadImage
          src={final.image}
          effect='blur'
          className='mx-auto w-full max-w-4xl rounded-2xl object-contain shadow-2xl'
          alt={final.title}
        />

        <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
          {final.title}
        </h2>

        <p className='mx-auto max-w-3xl text-base text-gray-600 md:text-lg dark:text-gray-300'>
          {final.description}
        </p>
      </motion.div>

      {/* Raw Image Assets */}
      <div className='space-y-10'>
        <h3 className='text-center text-2xl font-semibold text-gray-800 dark:text-white'>
          Raw Assets Used
        </h3>

        <div className='grid gap-12 md:grid-cols-3'>
          {rawAssets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='space-y-4 text-center'
            >
              <LazyLoadImage
                src={item.image}
                effect='blur'
                className='w-full rounded-xl object-cover shadow-lg'
                alt={item.title}
              />

              <h4 className='text-lg font-medium text-gray-800 dark:text-white'>
                {item.title}
              </h4>

              <p className='px-4 text-sm text-gray-600 dark:text-gray-300'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
