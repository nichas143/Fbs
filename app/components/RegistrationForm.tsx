'use client';

import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    program: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        class: '',
        program: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section className="bg-white section-padding" id="register">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Register for a Free Demo Class</h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience our teaching methodology firsthand. Fill out the form to register for a free demo class.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p>Access to a complete lecture from our experienced faculty</p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p>Opportunity to interact with teachers and ask questions</p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p>Preview of our online learning platform and resources</p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p>Personalized guidance on selecting the right program</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@fbseducation.com</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <CheckCircleIcon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for registering for a demo class. We will contact you within 24 hours with the details.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Register Another Student
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Class *
                    </label>
                    <select
                      id="class"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select your class</option>
                      <option value="class-8">Class 8</option>
                      <option value="class-9">Class 9</option>
                      <option value="class-10">Class 10</option>
                      <option value="class-11">Class 11</option>
                      <option value="class-12">Class 12</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                      Interested Program *
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a program</option>
                      <option value="foundation">Foundation Program</option>
                      <option value="jee">JEE Preparation</option>
                      <option value="neet">NEET Preparation</option>
                      <option value="mhtcet">MHTCET Preparation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Register for Demo Class'
                    )}
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our <a href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</a> and <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
