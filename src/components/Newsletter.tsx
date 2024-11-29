import React from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
      <div className="flex items-center space-x-4 mb-4">
        <Mail className="w-8 h-8" />
        <h3 className="text-2xl font-bold">Stay Updated</h3>
      </div>
      <p className="mb-6">Get the latest AI and ML insights delivered to your inbox.</p>
      <form className="flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-100 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}