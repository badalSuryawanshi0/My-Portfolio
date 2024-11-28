import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'Bhusari Colony,Kothrud Pune 411038',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '9511632614',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'Badalsuryawanshi0@example.com',
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactInfo.map((info, index) => (
        <div
          key={info.title}
          className="flex items-start gap-6 transform transition-all duration-500 hover:translate-x-2 group"
          style={{
            animation: `fadeInLeft 0.5s ease-out ${index * 0.2}s both`
          }}
        >
          <div className="bg-blue-200 p-4 rounded-2xl group-hover:bg-blue-100 transition-colors duration-700 transform group-hover:rotate-[360deg] transition-transform duration-700">
            <info.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="transform transition-all duration-300 group-hover:translate-x-2">
            <h3 className="font-semibold text-gray-300 mb-1">{info.title}</h3>
            <p className="text-gray-300 leading-relaxed">{info.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}