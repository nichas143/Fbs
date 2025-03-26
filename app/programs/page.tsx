import Link from 'next/link';
import { AcademicCapIcon, BeakerIcon, CalculatorIcon, BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Our Programs | FBS Education',
  description: 'Explore our comprehensive online training programs for classes 8-10 and competitive exams like JEE, NEET, and MHTCET',
};

export default function Programs() {
  const programs = [
    {
      id: 'foundation-8',
      title: 'Foundation Program - Class 8',
      description: 'Build a strong academic foundation in Mathematics, Science, and English for students in Class 8.',
      icon: <AcademicCapIcon className="h-12 w-12 text-primary-600" />,
      features: [
        'Comprehensive coverage of NCERT curriculum',
        'Regular assessments and progress tracking',
        'Interactive learning with visual aids',
        'Doubt solving sessions',
        'Preparation for school exams and Olympiads'
      ],
      duration: '12 months',
      level: 'Beginner',
      link: '/programs/foundation-8'
    },
    {
      id: 'foundation-9',
      title: 'Foundation Program - Class 9',
      description: 'Strengthen core concepts in Mathematics, Science, and English for students in Class 9.',
      icon: <AcademicCapIcon className="h-12 w-12 text-primary-600" />,
      features: [
        'In-depth coverage of NCERT curriculum',
        'Focus on building analytical skills',
        'Regular practice tests and assessments',
        'Personalized attention and doubt clearing',
        'Preparation for school exams and competitive tests'
      ],
      duration: '12 months',
      level: 'Intermediate',
      link: '/programs/foundation-9'
    },
    {
      id: 'foundation-10',
      title: 'Foundation Program - Class 10',
      description: 'Prepare thoroughly for board exams while building a foundation for competitive exams.',
      icon: <AcademicCapIcon className="h-12 w-12 text-primary-600" />,
      features: [
        'Complete coverage of Board exam syllabus',
        'Special focus on problem-solving techniques',
        'Regular mock tests in board exam pattern',
        'Preparation for competitive exams',
        'Career counseling and stream selection guidance'
      ],
      duration: '12 months',
      level: 'Advanced',
      link: '/programs/foundation-10'
    },
    {
      id: 'jee',
      title: 'JEE Preparation',
      description: 'Comprehensive preparation for JEE Main and Advanced with focus on conceptual clarity and problem-solving.',
      icon: <CalculatorIcon className="h-12 w-12 text-primary-600" />,
      features: [
        'Complete coverage of JEE syllabus',
        'Focus on advanced problem-solving techniques',
        'Regular mock tests in JEE pattern',
        'Previous years\' question paper analysis',
        'Special modules for JEE Advanced preparation'
      ],
      duration: '24 months',
      level: 'Advanced',
      link: '/programs/jee'
    },
    {
      id: 'neet',
      title: 'NEET Preparation',
      description: 'Specialized training for NEET with in-depth coverage of Biology, Physics, and Chemistry.',
      icon: <BeakerIcon className="h-12 w-12 text-primary-600" />,
      features: [
        'Comprehensive coverage of NEET syllabus',
        'Special focus on Biology with detailed diagrams',
        'Regular practice with MCQs and previous papers',
        'Concept strengthening and application-based learning',
        'Regular mock tests and performance analysis'
      ],
      duration: '24 months',
      level: 'Advanced',
      link: '/programs/neet'
    },
    {
      id: 'mhtcet',
      title: 'MHTCET Preparation',
      description: 'Targeted preparation for Maharashtra Common Entrance Test for Engineering and Pharmacy courses.',
      icon: <BookOpenIcon className="h-12 w-12 text-primary-600" />,
      features: [
        'Complete coverage of MHT-CET syllabus',
        'Focus on Maharashtra State Board concepts',
        'Regular mock tests in MHT-CET pattern',
        'Special strategies for time management',
        'Guidance for college selection and admission process'
      ],
      duration: '12-24 months',
      level: 'Intermediate to Advanced',
      link: '/programs/mhtcet'
    },
    {
      id: 'crash-course',
      title: 'Crash Courses',
      description: 'Intensive short-term courses for last-minute preparation before exams.',
      icon: <LightBulbIcon className="h-12 w-12 text-primary-600" />,
      features: [
        'Focused revision of important topics',
        'Quick tips and tricks for solving problems',
        'Important questions and their solutions',
        'Test series with detailed analysis',
        'Last-minute doubt clearing sessions'
      ],
      duration: '1-3 months',
      level: 'All Levels',
      link: '/programs/crash-course'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl mb-8">
              Comprehensive online training programs designed to help students excel in academics and competitive exams.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-8">
                  <div className="mb-5">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="flex justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-500">Duration</span>
                      <p className="font-medium">{program.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Level</span>
                      <p className="font-medium">{program.level}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      href={program.link}
                      className="text-primary-600 font-semibold hover:text-primary-800 inline-flex items-center"
                    >
                      Learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                    <Link 
                      href={`/register?program=${program.id}`}
                      className="btn-primary text-sm py-2"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do online classes work?</h3>
                <p className="text-gray-600">
                  Our online classes are conducted through a state-of-the-art learning platform. Students receive access to recorded video lectures, study materials, and interactive quizzes. Live doubt-solving sessions are also scheduled regularly.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What if I miss a scheduled class?</h3>
                <p className="text-gray-600">
                  All our classes are recorded and available for viewing at any time. You can watch the missed class at your convenience and never fall behind in your studies.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How will my progress be tracked?</h3>
                <p className="text-gray-600">
                  Our platform includes regular assessments, quizzes, and tests. Performance analytics are available to both students and parents, showing strengths and areas that need improvement.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can I interact with teachers?</h3>
                <p className="text-gray-600">
                  Yes, we have regular live doubt-solving sessions where students can interact directly with teachers. Additionally, you can submit your questions through our platform and receive answers within 24 hours.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What are the payment options?</h3>
                <p className="text-gray-600">
                  We offer flexible payment options including one-time payment, quarterly installments, and monthly subscriptions. Various payment methods like credit/debit cards, net banking, and UPI are accepted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their academic goals with our online training programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="btn-primary flex items-center justify-center gap-2">
              Register Now
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
