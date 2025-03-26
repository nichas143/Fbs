'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unlock Your Academic Potential
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Expert online training for classes 8-10 and competitive exams like JEE, NEET, and MHTCET. 
              Start your journey to success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/programs" className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                Explore Programs <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link href="/register" className="bg-transparent hover:bg-white/10 border-2 border-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                Register Now
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-xs">Online Class</div>
                  </div>
                  <div className="space-y-4 text-gray-800">
                    <h3 className="text-lg font-semibold">Physics Fundamentals</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>45 minutes remaining</span>
                    </div>
                    <div className="bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary-600 h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Progress: 65%</span>
                      <span className="text-primary-600">26/40 topics</span>
                    </div>
                    <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Continue Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
