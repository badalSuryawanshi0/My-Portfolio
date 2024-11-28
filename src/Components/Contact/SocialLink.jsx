import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/badalSuryawanshi0',
    color: 'hover:text-gray-800 hover:bg-gray-100'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/badal-suryawanshi-a60176237/',
    color: 'hover:text-blue-600 hover:bg-blue-50'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://x.com/badalsurya52812?t=slBCwMrbWXaoezG0cBIdEw&s=08',
    color: 'hover:text-blue-400 hover:bg-blue-50'
  },
  
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transform transition-all duration-300 hover:scale-110 p-3 rounded-xl ${social.color} hover:rotate-[360deg]`}
          style={{
            animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
          }}
        >
          <social.icon className="w-6 h-6" />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
}