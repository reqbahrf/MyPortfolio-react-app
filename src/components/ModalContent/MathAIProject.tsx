import ShowcaseGenerator from '../ShowcaseGenerator';
import { RiGithubFill, RiExternalLinkFill } from '@remixicon/react';
import { motion } from 'motion/react';
import aiGeneration from '/assets/math-ai-project/index.webp';
import sessionSettings from '/assets/math-ai-project/session-settings.webp';
import aistepByStep from '/assets/math-ai-project/ai-step-by-step-enhanced.webp';
import aiFeedback from '/assets/math-ai-project/ai-instant-feedback.webp';
import aiResultSummary from '/assets/math-ai-project/ai-view-summary.webp';
import aiChart from '/assets/math-ai-project/ai-chart-insight.webp';
import aiSessionManagement from '/assets/math-ai-project/ai-session-management.webp';
import aiExport from '/assets/math-ai-project/ai-export-session-as-pdf.webp';
import aiDarkModeShowcase from '/assets/math-ai-project/ai-darkmode.webp';
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
      title: 'Export Session as PDF',
      description:
        'Export your session as a PDF file for easy sharing and reference. ',
      image: aiExport,
    },
    {
      title: 'Dark / Light Mode',
      description:
        'Switch seamlessly between light and dark modes with preferences saved automatically.',
      image: aiDarkModeShowcase,
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
          Personal Project • Next.Js 14
        </span>
        <h2 className='font-display mb-6 text-4xl font-extrabold text-black md:text-6xl dark:text-white'>
          Math Problem Generator
        </h2>
        <div className='mx-auto max-w-3xl space-y-6'>
          <p className='font-body text-lg leading-relaxed text-black/80 dark:text-white/80'>
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
              className='bg-clay font-body text-bone shadow-clay/20 hover:bg-sage hover:shadow-sage/30 flex w-fit items-center gap-2 rounded-lg px-6 py-3 font-bold shadow-lg transition-all duration-300'
            >
              <RiExternalLinkFill size={20} />
              View Live Demo
            </a>
            <a
              href='https://github.com/reqbahrf/math-problem-generator'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-clay font-body text-bone shadow-clay/20 hover:bg-sage hover:shadow-sage/30 flex w-fit items-center gap-2 rounded-lg px-6 py-3 font-bold shadow-lg transition-all duration-300'
            >
              <RiGithubFill /> View Source Code
            </a>
          </div>
        </div>
      </motion.div>

      {/* ---------- Feature List ---------- */}
      <ShowcaseGenerator items={features} />
    </section>
  );
};

export default MathAIProject;
