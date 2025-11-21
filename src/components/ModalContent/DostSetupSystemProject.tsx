import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
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
    <div className='mainContent z-10 flex w-full flex-col items-center space-y-5 p-4 px-10'>
      <section className='bg-linear-to-b from-gray-400 to-white px-6 py-20 transition-colors duration-300 md:px-20 dark:from-gray-900 dark:to-gray-800'>
        {/* ---------- Project Intro ---------- */}
        <motion.div
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='mb-4 text-4xl font-extrabold text-gray-800 md:text-5xl dark:text-white'>
            DOST SETUP Management System
          </h2>
          <p className='mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400'>
            The project involves creating a web-based platform for the DOST
            (Department of Science and Technology) Small Enterprise Technology
            Upgrading Program (SETUP) in Davao del Norte. This system was
            developed as a Capstone Project Requirement for a Bachelor of
            Science in Information System.
          </p>
          <p className='mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400'>
            Its primary purpose is to streamline the process of managing funding
            assistance for small enterprises, improving efficiency and project
            tracking for DOST staff.
          </p>
          <p className='mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400'>
            The system is built using <strong>Laravel 11</strong>. The source
            code has since been turned over to the Regional Knowledge Management
            System (KMS) of DOST for integration and synchronization with their
            existing systems.
          </p>

          {/* Note: Links are omitted as per project details (source code turned over, no public demo). */}
        </motion.div>

        {/* ---------- Feature List (Showcase) ---------- */}
        <div className='space-y-20'>
          {showcase.map((item, index) => (
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
                  src={item.image}
                  className='w-full rounded-2xl object-contain shadow-lg sm:h-[200px] md:h-[400px]'
                  alt={item.title}
                />
              </div>

              {/* Text */}
              <div className='w-full text-center md:w-1/2 md:text-left'>
                <h3 className='mb-3 text-2xl font-semibold text-gray-800 dark:text-white'>
                  {item.title}
                </h3>
                <p className='indent-6 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300'>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DostSetupSystemProject;
