import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RiGithubFill } from '@remixicon/react';
import { motion } from 'motion/react';
import aiGeneration from '/assets/math-ai-project/index.webp';
import sessionSettings from '/assets/math-ai-project/session-settings.webp';
import aistepByStep from '/assets/math-ai-project/ai-step-by-step.gif';
import aiFeedback from '/assets/math-ai-project/ai-instant-feedback.gif';
import aiResultSummary from '/assets/math-ai-project/ai-view-summary.gif';
import aiChart from '/assets/math-ai-project/ai-chart-insight.gif';
import aiSessionManagement from '/assets/math-ai-project/ai-session-management.gif';
import aiDarkModeShowcase from '/assets/math-ai-project/ai-darkmode-showcase.gif';
const MathAIProject = () => {
  const features = [
    {
      title: 'AI-Powered Math Problem Generation',
      description:
        'Generate math problems dynamically using Gemini AI. Supports Grades 1-12 and multiple difficulty levels like Easy, Medium, and Hard.',
      image: aiGeneration,
    },
    {
      title: 'Session Configuration',
      description:
        'Configure session settings such as number of problems and grade level. making it adaptive to the user choices.',
      image: sessionSettings,
    },
    {
      title: 'Step-by-Step Learning Assistance',
      description:
        'Each problem includes hints and detailed step-by-step solutions to help students learn effectively and confidently.',
      image: aistepByStep,
    },
    {
      title: 'Instant Feedback & Answer Evaluation',
      description:
        'Get immediate AI feedback on your answers with clear explanations and encouragement for improvement.',
      image: aiFeedback,
    },
    {
      title: 'View Summary of Results',
      description:
        'View a summary of your results, including the number of correct answers, the number of incorrect answers, and step-by-step solutions for each problem.',
      image: aiResultSummary,
    },
    {
      title: 'Session Management & History',
      description:
        'Save, resume, or delete practice sessions easily. Review your progress anytime through detailed history summaries.',
      image: aiSessionManagement,
    },
    {
      title: 'Performance Insights & Charts',
      description:
        'Visualize your progress with interactive line and pie charts that show accuracy trends and problem distributions.',
      image: aiChart,
    },
    {
      title: 'Dark / Light Mode',
      description:
        'Switch seamlessly between light and dark modes with preferences saved automatically.',
      image: aiDarkModeShowcase,
    },
  ];

  return (
    <div className='flex flex-col items-center space-y-5 p-4 w-full px-10 z-10 mainContent'>
      <section className='py-20 px-6 md:px-20 bg-linear-to-b from-gray-400 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300'>
        {/* ---------- Project Intro ---------- */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4'>
            Math Problem Generator
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'>
            An AI-assisted math learning tool built with{' '}
            <strong>Next.js</strong>,<strong> Supabase</strong>, and{' '}
            <strong>Google Gemini AI</strong>. It generates adaptive math
            problems, evaluates answers instantly, and visualizes performance
            trends through charts and feedback.
          </p>

          {/* Buttons */}
          <div className='mt-10 flex flex-wrap justify-center gap-4'>
            <a
              href='https://mathgenai.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 font-medium'
            >
              🚀 View Live Demo
            </a>
            <a
              href='https://github.com/reqbahrf/math-problem-generator'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-200 font-medium'
            >
              <RiGithubFill /> View Source Code
            </a>
          </div>
        </motion.div>

        {/* ---------- Feature List ---------- */}
        <div className='space-y-20'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className='w-auto h-auto md:w-1/2 flex justify-center'>
                <LazyLoadImage
                  effect='blur'
                  threshold={300}
                  wrapperProps={{
                    style: { transitionDelay: '0.3s' },
                  }}
                  src={feature.image}
                  className='rounded-2xl shadow-lg sm:h-[200px] md:h-[400px] w-full object-contain'
                  alt={feature.title}
                />
              </div>

              {/* Text */}
              <div className='w-full md:w-1/2 text-center md:text-left'>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-white mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg'>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MathAIProject;
