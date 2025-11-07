import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
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
  return (
    <>
      <div className='flex flex-col space-y-5 p-4 w-full px-10 mainContent'>
        <div className='flex flex-col items-center py-40 h-auto space-y-10'>
          <p className='text-white text-center text-lg mb-4 sm:w-full md:w-3/4'>
            The SETUP Management System is a web-based platform designed for the
            DOST (Department of Science and Technology) Small Enterprise
            Technology Upgrading Program (SETUP) in Davao del Norte,
            Philippines. This system streamlines the process of managing funding
            assistance for small enterprises.
          </p>
          <p className='text-white text-center text-lg mb-4'>
            Key functionalities include:
          </p>
          <ul className='text-white text-lg text-left space-y-2 sm:w-full md:w-3/4'>
            <li>
              <strong>Applicant Management:</strong> Allows applicants to submit
              their SETUP applications and upload all necessary personal and
              business documents directly through the system. The system also
              verifies applicant accounts and identifies enterprise levels.
            </li>
            <li>
              <strong>Cooperator/Client Support:</strong> Provides an organized
              storage system for cooperator/client data. Cooperators can submit
              quarterly reports and project data sheets to track business
              progress and monitor their refund payments. They can also view
              payment status, remaining balances, and fund utilization.
            </li>
            <li>
              <strong>Staff Operations:</strong> Supports staff in recording,
              calculating, and monitoring funding assistance. Staff can manage
              cooperator business information, record fund releases, and monitor
              funding status, as well as generate various project reports.
            </li>
            <li>
              <strong>Admin Oversight:</strong> Enables administrative users to
              access, review, and manage all cooperator and client data,
              including project lists and user accounts. The system also
              performs quarterly calculations for assets, employment,
              production, and sales, determines DOST-SETUP coverage amounts, and
              calculates monthly payments.
            </li>
          </ul>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostIndex}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Index Page'
            />
          </div>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostAdmin1_1}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Admin Page 1.1'
            />
          </div>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostAdmin1_2}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Admin Page 1.2'
            />
          </div>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostAppli1}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Application Page 1'
            />
          </div>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostApplicationForm1}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Application Form 1'
            />
          </div>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostApplicationForm1_1}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Application Form 1.1'
            />
          </div>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostCoop1}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Coop Page 1'
            />
          </div>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostCoop2}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Coop Page 2'
            />
          </div>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostStaff1}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Staff Page 1'
            />
          </div>
          <div>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' },
              }}
              src={dostStaff3}
              className='w-4/5 sm:w-1/2 md:w-1/2 mx-auto'
              alt='DOST SETUP System - Staff Page 3'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DostSetupSystemProject;
