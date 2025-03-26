import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export const metadata = {
  title: 'About Us | FBS Education',
  description: 'Learn about FBS Education - our mission, vision, and dedicated team of educators',
};

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Sharma',
      role: 'Founder & Director',
      bio: 'Ph.D in Physics with over 20 years of experience in teaching JEE and NEET aspirants. Former faculty at a prestigious coaching institute.',
      image: '/team/director.jpg'
    },
    {
      name: 'Prof. Anita Patel',
      role: 'Academic Head',
      bio: 'M.Sc. in Mathematics with 15 years of experience in curriculum development and academic planning for competitive exams.',
      image: '/team/academic-head.jpg'
    },
    {
      name: 'Dr. Vikram Singh',
      role: 'Physics Faculty',
      bio: 'Ph.D in Physics from IIT Bombay with a passion for making complex concepts simple and engaging for students.',
      image: '/team/physics.jpg'
    },
    {
      name: 'Dr. Meena Gupta',
      role: 'Chemistry Faculty',
      bio: 'Ph.D in Organic Chemistry with research experience and 12 years of teaching students for competitive exams.',
      image: '/team/chemistry.jpg'
    },
    {
      name: 'Dr. Sunil Verma',
      role: 'Biology Faculty',
      bio: 'MBBS, MD with specialized knowledge in teaching Biology for medical entrance exams like NEET.',
      image: '/team/biology.jpg'
    },
    {
      name: 'Prof. Deepak Kumar',
      role: 'Mathematics Faculty',
      bio: 'M.Tech from IIT with a knack for simplifying complex mathematical problems for students.',
      image: '/team/mathematics.jpg'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-8">
              Empowering students through quality online education since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                FBS Education was founded in 2018 with a mission to make quality education accessible to students across India, regardless of their geographical location. What started as a small initiative with just 50 students has now grown into a comprehensive online learning platform serving thousands of students.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founder, Dr. Rajesh Sharma, recognized the challenges faced by students in smaller cities and towns in accessing quality coaching for competitive exams. This inspired him to create an online platform that brings together experienced educators and cutting-edge technology to deliver exceptional learning experiences.
              </p>
              <p className="text-lg text-gray-700">
                Today, FBS Education stands as a testament to our commitment to educational excellence, having helped numerous students achieve their dreams of getting into premier engineering and medical institutions across the country.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              {/* Placeholder for an image */}
              <div className="text-center p-8">
                <p className="text-gray-500 mb-2">Image Placeholder</p>
                <p className="text-sm text-gray-400">Our campus/team photo will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To democratize quality education by leveraging technology to make expert teaching accessible to all students, regardless of their location or socioeconomic background.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Provide affordable, high-quality education</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Make learning engaging and effective</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Support students throughout their academic journey</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                To be the leading online education platform in India, recognized for our innovative teaching methods, student success rates, and contribution to the educational ecosystem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Create a community of lifelong learners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Continuously innovate our teaching methodologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Empower students to achieve their full potential</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced educators is dedicated to helping students achieve their academic goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for team member images */}
                  <div className="text-center p-8">
                    <p className="text-gray-500 mb-2">{member.name}</p>
                    <p className="text-sm text-gray-400">Photo will appear here</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Teaching Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in a holistic approach to education that focuses on understanding concepts rather than rote learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Concept-Based Learning</h3>
              <p className="text-gray-600">
                We focus on building a strong conceptual foundation rather than memorization. Our teaching methodology encourages students to understand the 'why' behind every concept.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Approach</h3>
              <p className="text-gray-600">
                We use analytics to track student progress and identify areas of improvement. This allows us to provide personalized guidance and support to each student.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Learning</h3>
              <p className="text-gray-600">
                We encourage peer learning through discussion forums and group activities. This helps students develop communication skills and learn from different perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the FBS difference with our innovative teaching methods and dedicated faculty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="btn-primary flex items-center justify-center gap-2">
              Register for a Demo Class
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
