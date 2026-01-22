import ShowcaseGenerator from '../ShowcaseGenerator';
import { motion } from 'motion/react';
import dostAdmin1_1 from '/assets/dost-setup-system/Admin1.1.webp';
import dostAdmin1_2 from '/assets/dost-setup-system/Admin1.2.webp';
import dostAppli1 from '/assets/dost-setup-system/Appli1.webp';
import dostApplicationForm1_1 from '/assets/dost-setup-system/ApplicationForm1.1.webp';
import dostApplicationForm1 from '/assets/dost-setup-system/ApplicationForm1.webp';
import dostCoop1 from '/assets/dost-setup-system/Coop1.webp';
import dostCoop2 from '/assets/dost-setup-system/Coop2.webp';
import dostIndex from '/assets/dost-setup-system/index.webp';
import dostStaff1 from '/assets/dost-setup-system/Staff1.webp';
import dostStaff3 from '/assets/dost-setup-system/Staff3.webp';

const DostSetupSystemProject = () => {
  const showcase = [
    {
      title: 'Index Page',
      description:
        'This is the index page of the system. It features a navigation bar and a prominent hero section introducing the Small Enterprise Technology Upgrading Program (SETUP) and its goal to provide fund & technical assistance to Micro, Small, Medium Enterprises (MSMEs).',
      image: dostIndex,
    },
    {
      title: 'Admin Dashboard (Project Status)',
      description:
        'This is the admin dashboard page of the system. with a chart showing the number projects statuses per year, locale and enterprise level filtered by Region, Province, City, and Barangay.',
      image: dostAdmin1_1,
    },
    {
      title: 'Admin Dashboard (Project Management)',
      description:
        'Also admin dashboard page of the system. where the admin can view all the projects handled by the staff. generate a PDF report for the current year.',
      image: dostAdmin1_2,
    },
    {
      title: 'Applicant Management',
      description:
        'This is the application page of the system. can select the business if they have multiple business registered under SETUP.',
      image: dostAppli1,
    },
    {
      title: 'Application Form (Step 1)',
      description:
        'This is the application first step of multi-step form page of the system. Input their personal information.',
      image: dostApplicationForm1,
    },
    {
      title: 'Application Form (Step 2)',
      description:
        'This is the application second step of multi-step form page of the system. Input their business information such as their requested fund amount, etc.',
      image: dostApplicationForm1_1,
    },
    {
      title: 'Cooperator Dashboard',
      description:
        'This is the cooperator dashboard page of the system. where the cooperator view the selected business and the status of the project such as the remaining balance and upcoming due payments.',
      image: dostCoop1,
    },
    {
      title: 'Cooperator Payment Tracking',
      description:
        'This is the cooperator Payments tab of the system. where the cooperator can view the payment statuses and payment history.',
      image: dostCoop2,
    },
    {
      title: 'Staff Dashboard (Monthly Projects)',
      description:
        'This is the staff dashboard page of the system. where the staff can view a chart showing the number projects per month for a selected year.',
      image: dostStaff1,
    },
    {
      title: 'Staff Dashboard (Project List)',
      description:
        'also staff dashboard page of the system. where the staff can view all the projects handled.',
      image: dostStaff3,
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
          Capstone Project • Laravel 11
        </span>

        <h2 className='font-display mb-6 text-4xl font-extrabold text-black md:text-6xl dark:text-white'>
          DOST SETUP Management System
        </h2>

        <div className='mx-auto max-w-3xl space-y-6'>
          <p className='font-body text-lg leading-relaxed text-black/80 dark:text-white/80'>
            Developed as a Capstone Project for the Department of Science and
            Technology (DOST), this platform streamlines funding assistance for
            small enterprises in Davao del Norte.
          </p>

          <p className='font-body text-lg leading-relaxed text-black/80 dark:text-white/80'>
            The system tracks multi-year project statuses, financial balances,
            and payment history, significantly improving efficiency for DOST
            staff and cooperators.
          </p>

          <div className='pt-6'>
            <p className='font-body text-sage border-app-text/10 inline-block border-t pt-6 text-sm italic'>
              Note: Source code has been turned over to the Regional Knowledge
              Management System (KMS) for official integration.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ---------- Feature List (Showcase) ---------- */}
      <ShowcaseGenerator items={showcase} />
    </section>
  );
};

export default DostSetupSystemProject;
