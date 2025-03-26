'use client';

import Link from 'next/link';
import { CalendarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const UpcomingBatches = () => {
  const batches = [
    {
      id: 1,
      title: 'Foundation Program - Class 8',
      startDate: 'April 15, 2025',
      duration: '12 months',
      schedule: 'Mon, Wed, Fri (5:00 PM - 6:30 PM)',
      seats: 50,
      seatsAvailable: 15,
      registrationDeadline: 'April 10, 2025',
      link: '/register?program=foundation-8'
    },
    {
      id: 2,
      title: 'Foundation Program - Class 9',
      startDate: 'April 20, 2025',
      duration: '12 months',
      schedule: 'Tue, Thu, Sat (4:00 PM - 5:30 PM)',
      seats: 50,
      seatsAvailable: 22,
      registrationDeadline: 'April 15, 2025',
      link: '/register?program=foundation-9'
    },
    {
      id: 3,
      title: 'JEE & MHTCET Preparation',
      startDate: 'May 1, 2025',
      duration: '24 months',
      schedule: 'Mon, Tue, Thu, Sat (6:00 PM - 8:00 PM)',
      seats: 60,
      seatsAvailable: 8,
      registrationDeadline: 'April 25, 2025',
      link: '/register?program=jee-mhtcet'
    },
    {
      id: 4,
      title: 'NEET Preparation',
      startDate: 'May 5, 2025',
      duration: '24 months',
      schedule: 'Mon, Wed, Fri, Sun (6:00 PM - 8:00 PM)',
      seats: 60,
      seatsAvailable: 12,
      registrationDeadline: 'April 30, 2025',
      link: '/register?program=neet'
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Batches</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot in our upcoming online training batches. Limited seats available!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {batches.map((batch) => (
            <div key={batch.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{batch.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-primary-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Start Date</p>
                      <p className="font-medium">{batch.startDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-primary-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Schedule</p>
                      <p className="font-medium">{batch.schedule}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <UserGroupIcon className="h-5 w-5 text-primary-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Availability</p>
                      <p className="font-medium">{batch.seatsAvailable} out of {batch.seats} seats available</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary-600 h-2.5 rounded-full" 
                      style={{ width: `${((batch.seats - batch.seatsAvailable) / batch.seats) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-3 whitespace-nowrap">
                    {Math.round(((batch.seats - batch.seatsAvailable) / batch.seats) * 100)}% Full
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Registration Deadline</p>
                    <p className="font-medium text-red-600">{batch.registrationDeadline}</p>
                  </div>
                  <Link 
                    href={batch.link}
                    className="btn-primary text-sm py-2"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/batches"
            className="text-primary-600 font-semibold hover:text-primary-800 inline-flex items-center"
          >
            View All Upcoming Batches
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
