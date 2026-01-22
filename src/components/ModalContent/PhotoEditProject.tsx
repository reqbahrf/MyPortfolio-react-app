import { motion } from 'motion/react';
import slide1Photo from '/assets/Photo_project/slide1.jpg';
import slide2Photo from '/assets/Photo_project/slide2.jpg';
import slide3Photo from '/assets/Photo_project/slide3.jpg';
import slide4Photo from '/assets/Photo_project/slide4.jpg';
import backgroundPhoto from '/assets/Photo_project/raw_photos/backgroundImg.webp';
import floridaPhoto from '/assets/Photo_project/raw_photos/florida-kennedy-space-center-rocket-launch.webp';
import otherPhoto from '/assets/Photo_project/raw_photos/1641457957683.webp';
import ShowcaseGenerator from '../ShowcaseGenerator';
import BreakdownShowcase from '../BreakdownShowcase';

const PhotoEditProject = () => {
  const editShowcase = {
    final: {
      title: 'Final Edited Photo',
      description:
        'A scene capturing a rocket launch in the distance, viewed by a solitary person, all set against an intense, fiery sunset. It perfectly blends the raw beauty of nature with the awe of human achievement.',
      image: slide1Photo,
    },
    rawAssets: [
      {
        title: 'Raw Background Photo',
        description: 'Used as the sunset + environment base.',
        image: backgroundPhoto,
      },
      {
        title: 'Raw Rocket Launch Photo',
        description: 'Rocket asset extracted and blended into scene.',
        image: floridaPhoto,
      },
      {
        title: 'Raw Person Standing Photo',
        description: 'Foreground silhouette subject.',
        image: otherPhoto,
      },
    ],
  };
  const showcase = [
    {
      title: 'Gaming Keyboard with Smartwatch',
      description:
        'This image is a striking, low-light shot focused on a gaming keyboard lit up by vibrant RGB lights, with a smartwatch face digitally composited onto the keys, giving it a cool, slightly surreal, tech-heavy atmosphere.',
      image: slide2Photo,
    },
    {
      title: 'Woody Plant in Container',
      description:
        'This is a macro or close-up photograph centered on a small, woody plant, likely a bonsai starter or a rooted cutting, which is being grown in a bright blue plastic pipe or container, all set against a lush, green background.',
      image: slide3Photo,
    },
    {
      title: 'Farm Landscape Shot',
      description:
        'A peaceful landscape of rice fields, with a path winding through the vibrant greenery, backed by a mountain range.',
      image: slide4Photo,
    },
  ];
  return (
    <section className='px-6 py-20 md:px-20'>
      {/* ---------- Project Intro ---------- */}
      <motion.div
        className='mb-24 text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className='font-body text-clay mb-4 block text-xs tracking-[0.3em] uppercase'>
          School Projects • Photo Manipulation
        </span>
        <h2 className='font-display mb-6 text-4xl font-extrabold text-black md:text-6xl dark:text-white'>
          Photo Editing Project
        </h2>

        <div className='mx-auto max-w-3xl space-y-6'>
          <p className='font-body text-lg leading-relaxed text-black/80 dark:text-white/80'>
            This project showcases advanced photo manipulation techniques using
            Adobe Photoshop, combining raw images into final compositions that
            convey powerful narratives.
          </p>
          <p className='font-body text-lg leading-relaxed text-black/80 dark:text-white/80'>
            The images demonstrate various editing styles, from surreal tech
            integrations to natural scene enhancements, highlighting the
            creative process of transforming ordinary photos into striking
            visual stories.
          </p>
        </div>
      </motion.div>

      {/* ---------- Feature List (Showcase) ---------- */}
      <BreakdownShowcase {...editShowcase} />
      <ShowcaseGenerator items={showcase} />
    </section>
  );
};

export default PhotoEditProject;
