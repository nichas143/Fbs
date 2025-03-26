'use client';

import Link from 'next/link';
import { AcademicCapIcon, BeakerIcon, CalculatorIcon } from '@heroicons/react/24/outline';

const ProgramHighlights = () => {
  const programs = [
    {
      title: 'Foundation Programs',
      description: 'Build a strong academic foundation for students in classes 8-10 with comprehensive courses in Mathematics, Science, and English.',
      icon: <AcademicCapIcon className="h-12 w-12 text-primary-600" />,
      link: '/programs/foundation',
      classes: 'Classes 8-10'
    },
    {
      title: 'JEE & MHTCET Preparation',
      description: 'Specialized coaching for engineering entrance exams with focus on Physics, Chemistry, and Mathematics.',
      icon: <CalculatorIcon className="h-12 w-12 text-primary-600" />,
      link: '/programs/engineering',
      classes: 'Classes 11-12'
    },
    {
      title: 'NEET Preparation',
      description: 'Comprehensive preparation for medical entrance exams with in-depth coverage of Biology, Physics, and Chemistry.',
      icon: <BeakerIcon className="h-12 w-12 text-primary-600" />,
      link: '/programs/medical',
      classes: 'Classes 11-12'
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive online training programs designed to help students excel in academics and competitive exams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-8">
                <div className="mb-5">
                  {program.icon}
                </div>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full">
                  {program.classes}
                </div>
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Link 
                  href={program.link}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800"
                >
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/programs"
            className="btn-primary inline-flex items-center"
          >
            View All Programs
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
