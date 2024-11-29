import React, { useState } from 'react';
import { CircuitBoard, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <CircuitBoard className="w-8 h-8" />
            <span className="text-xl font-bold">AI Insights</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-purple-200 transition-colors">Home</a>
            <a href="#articles" className="hover:text-purple-200 transition-colors">Articles</a>
            <a href="#about" className="hover:text-purple-200 transition-colors">About</a>
            <a href="#contact" className="hover:text-purple-200 transition-colors">Contact</a>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-purple-200 transition-colors">Home</a>
              <a href="#articles" className="hover:text-purple-200 transition-colors">Articles</a>
              <a href="#about" className="hover:text-purple-200 transition-colors">About</a>
              <a href="#contact" className="hover:text-purple-200 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}