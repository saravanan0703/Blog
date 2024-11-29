import React from 'react';
import { Mail, Globe, User } from 'lucide-react';

export function Contact() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-purple-600" />
          <span className="text-gray-700">Saravanan</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-purple-600" />
          <a href="mailto:saravanan57157@gmail.com" className="text-purple-600 hover:text-purple-800 transition-colors">
            saravanan57157@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Globe className="w-5 h-5 text-purple-600" />
          <a 
            href="https://saravanan-portfolio.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 transition-colors"
          >
            Portfolio Website
          </a>
        </div>
      </div>
    </section>
  );
}