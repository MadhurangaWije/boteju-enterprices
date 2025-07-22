'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
    interestedVehicle: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        subject: '',
        message: '',
        interestedVehicle: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: ['info@botejuenterprises.com', 'sales@botejuenterprises.com'],
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+81-3-1234-5678', '+81-90-8765-4321 (Mobile)'],
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Shibuya Street', 'Tokyo 150-0002, Japan'],
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM JST', 'Saturday: 10:00 AM - 4:00 PM JST'],
    },
  ];

  return (
    <div className="py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your Japanese vehicle import journey? Get in touch with our expert team.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-4xl mb-4">✓</div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Thank you for your inquiry!
                  </h3>
                  <p className="text-green-600">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="vehicle-inquiry">Vehicle Inquiry</option>
                      <option value="import-process">Import Process Questions</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="shipping">Shipping & Logistics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interestedVehicle" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Vehicle (Optional)
                    </label>
                    <input
                      type="text"
                      id="interestedVehicle"
                      name="interestedVehicle"
                      value={formData.interestedVehicle}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., 2020 Toyota Prius, Honda Civic Type R"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your requirements, budget, timeline, or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Answers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">How long does the import process take?</h4>
                    <p className="text-sm text-gray-600">Typically 2-4 months from purchase to delivery.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Do you provide shipping to my country?</h4>
                    <p className="text-sm text-gray-600">We ship worldwide! Contact us for specific country requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Can I see the vehicle before purchase?</h4>
                    <p className="text-sm text-gray-600">We provide detailed photos, auction sheets, and can arrange inspections.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">What payment methods do you accept?</h4>
                    <p className="text-sm text-gray-600">Bank transfers, certified checks, and secure online payments.</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Stay updated with our latest inventory and import tips:</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      📘 Facebook
                    </a>
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      📷 Instagram
                    </a>
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      🐦 Twitter
                    </a>
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Location</h2>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-4xl mb-2">🗾</div>
                <p className="font-medium">Tokyo, Japan Office</p>
                <p className="text-sm">Interactive map would be integrated here</p>
                <p className="text-sm">123 Shibuya Street, Tokyo 150-0002</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}