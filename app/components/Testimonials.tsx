'use client';

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'JEE Advanced 2024',
      image: '/testimonial-1.jpg',
      content: 'The structured approach and recorded lectures helped me balance my school studies with JEE preparation. I could revisit complex topics multiple times until I understood them completely.',
      rating: 5,
      achievement: 'AIR 342 in JEE Advanced'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'NEET 2024',
      image: '/testimonial-2.jpg',
      content: 'The biology section was exceptionally well-taught with detailed explanations and visual aids. The practice tests were very similar to the actual NEET exam pattern which helped me prepare effectively.',
      rating: 5,
      achievement: '680/720 in NEET'
    },
    {
      id: 3,
      name: 'Aditya Verma',
      role: 'Class 10 Student',
      image: '/testimonial-3.jpg',
      content: 'The foundation program helped me build a strong base in mathematics and science. The teachers explain concepts in a simple and engaging way that makes learning enjoyable.',
      rating: 4,
      achievement: '96% in Board Exams'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who have achieved their academic goals with our online training programs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="w-20 h-20 rounded-full bg-gray-300 flex-shrink-0">
                        {/* Image placeholder - in production, use next/image */}
                        <div className="w-full h-full rounded-full flex items-center justify-center text-gray-500 text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-primary-600">{testimonial.role}</p>
                        <div className="mt-1 inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                          {testimonial.achievement}
                        </div>
                      </div>
                    </div>
                    <blockquote className="mt-6 text-gray-700 text-lg italic">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 mx-1 rounded-full ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
