import React from 'react';
import { Code2 } from 'lucide-react';

export function About() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 my-8">
      <div className="flex items-center space-x-4 mb-6">
        <Code2 className="w-8 h-8 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
      </div>
      <p className="text-gray-700 leading-relaxed">
        I am a software developer waiting for more challenging Tasks. With a passion for creating innovative solutions
        and pushing the boundaries of what's possible in technology, I'm always excited to take on new and complex
        projects that test my skills and creativity.
      </p>
    </section>
  );
}