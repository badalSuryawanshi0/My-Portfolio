import React from 'react';
import ContactForm from './ContactFrom';
import ContactInfo from './Contactinfo';
import SocialLinks from './SocialLink';
import { Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 mb-2 float-animation">
            <Sparkles className="w-6 h-6 text-blue-600 spin-slow" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Contact Us</span>
          </div>
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-400 mb-4"
            style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            Get in Touch
          </h1>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.4s both'
          }}
        >
          <div className=" tspace-y-12 lg:pt-8 ">
            <ContactInfo />
            <div>
              <h2 className="text-xl pt-16 font-semibold text-white mb-6">
                Connect With Us
              </h2>
              <SocialLinks />
            </div>
          </div>

          <div className="bg-gray-100 rounded-3xl shadow-xl p-8  md:p-10 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
