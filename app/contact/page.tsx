'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.',
      });
      return;
    }

    // In a real application, you would send the form data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8">
              Have questions about our programs? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-2">General Inquiries</p>
              <p className="text-lg font-medium">+91 98765 43210</p>
              <p className="text-gray-600 mt-4 mb-2">Technical Support</p>
              <p className="text-lg font-medium">+91 98765 43211</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <EnvelopeIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-gray-600 mb-2">General Inquiries</p>
              <p className="text-lg font-medium">info@fbseducation.com</p>
              <p className="text-gray-600 mt-4 mb-2">Admissions</p>
              <p className="text-lg font-medium">admissions@fbseducation.com</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-2">Head Office</p>
              <p className="text-lg font-medium">
                FBS Education, 3rd Floor,<br />
                Tech Park, Baner Road,<br />
                Pune, Maharashtra 411045
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Program Information">Program Information</option>
                      <option value="Admission Process">Admission Process</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn-primary py-3 px-8"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Map or Image */}
            <div className="bg-gray-200 rounded-lg flex items-center justify-center min-h-[400px]">
              {/* Placeholder for Google Map or office image */}
              <div className="text-center p-8">
                <p className="text-gray-500 mb-2">Map Placeholder</p>
                <p className="text-sm text-gray-400">Google Map will be integrated here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What are your office hours?</h3>
                <p className="text-gray-600">
                  Our office is open Monday through Friday from 9:00 AM to 6:00 PM. We are closed on weekends and national holidays.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How quickly can I expect a response?</h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our support line.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Can I schedule a meeting with a program advisor?</h3>
                <p className="text-gray-600">
                  Yes, you can schedule a virtual meeting with one of our program advisors. Please mention your preferred date and time in the contact form, and we will get back to you with confirmation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Do you offer any free trial classes?</h3>
                <p className="text-gray-600">
                  Yes, we offer a free demo class for all our programs. You can register for a demo class through our website or by contacting our admissions team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
