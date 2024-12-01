"use client"
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Thank you for contacting us! We will get back to you shortly.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="py-16 bg-primary" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-100">Contact Us</h1>
          <p className="text-lg text-slate-100 mt-4">
            Want to ask anything? Send us a mail anytime!
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Cards */}
          <div className="space-y-6">
            <div className="bg-secondary shadow-black border-black p-6 rounded-lg shadow-lg flex items-center gap-4">
              <span className="text-3xl text-white">📞</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone No</h3>
                <p className="text-gray-300 mt-2">+251 912 345 678<br />+251 912 345 678</p>
              </div>
            </div>
            <div className="bg-secondary p-6 shadow-black border-black rounded-lg shadow-lg flex items-center gap-4">
              <span className="text-3xl text-white">✉️</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Email Address</h3>
                <p className="text-gray-300 mt-2">
                  furtuuconstruction@gmail.com<br />
                  furtuue@construction.com
                </p>
              </div>
            </div>
            <div className="bg-secondary shadow-black border-black p-6 rounded-lg shadow-lg flex items-center gap-4">
              <span className="text-3xl text-white">📍</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Office Address</h3>
                <p className="text-gray-300 mt-2">
                  Jimma<br />
                  Oromia, ETHIOPIA
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-secondary p-10 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-100">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-100">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone and Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-100">
                    Phone No
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-100">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-100">
                  Message Here*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-400 text-white py-2 px-6 rounded-lg hover:bg-primary border-black border shadow-md shadow-black focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Send Mail
                </button>
              </div>
            </form>

            {/* Form Status */}
            {formStatus && (
              <div className="mt-6 text-center text-sm text-slate-100">
                <p>{formStatus}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
