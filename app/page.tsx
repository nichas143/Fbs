import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import HeroSection from './components/HeroSection';
import ProgramHighlights from './components/ProgramHighlights';
import Testimonials from './components/Testimonials';
import UpcomingBatches from './components/UpcomingBatches';
import RegistrationForm from './components/RegistrationForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Key Benefits Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Recorded Classes</h3>
              <p className="text-gray-600">Access all lectures anytime, anywhere. Never miss a class and learn at your own pace.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Customized study plans and progress tracking to help you focus on areas that need improvement.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from experienced educators who specialize in preparing students for competitive exams.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ProgramHighlights />
      <Testimonials />
      <UpcomingBatches />
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of students who have achieved their academic goals with our online training programs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/programs" className="btn-primary flex items-center justify-center gap-2">
              Explore Programs <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="btn-secondary flex items-center justify-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <RegistrationForm />
    </main>
  );
}
